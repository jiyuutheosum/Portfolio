import { Octokit } from '@octokit/rest';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function createRepository() {
  try {
    const octokit = await getGitHubClient();
    
    // Get authenticated user info
    const { data: user } = await octokit.rest.users.getAuthenticated();
    console.log(`✅ Authenticated as: ${user.login}`);
    
    // Create repository
    const repoName = 'portfolio-website';
    console.log(`Creating repository: ${repoName}...`);
    
    const { data: repo } = await octokit.rest.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'Modern UI/UX Designer Portfolio Website built with React, TailwindCSS, and Framer Motion',
      private: false,
      auto_init: false,
    });
    
    console.log(`\n✅ Repository created successfully!`);
    console.log(`Repository URL: ${repo.html_url}`);
    console.log(`Clone URL (HTTPS): ${repo.clone_url}`);
    
    return {
      url: repo.html_url,
      cloneUrl: repo.clone_url,
      sshUrl: repo.ssh_url,
      fullName: repo.full_name,
      owner: user.login,
    };
  } catch (error: any) {
    if (error.status === 422 && error.message?.includes('name already exists')) {
      console.log('Repository already exists. Fetching existing repository...');
      const octokit = await getGitHubClient();
      const { data: user } = await octokit.rest.users.getAuthenticated();
      const { data: repo } = await octokit.rest.repos.get({
        owner: user.login,
        repo: 'portfolio-website',
      });
      
      console.log(`\n✅ Using existing repository`);
      console.log(`Repository URL: ${repo.html_url}`);
      console.log(`Clone URL (HTTPS): ${repo.clone_url}`);
      
      return {
        url: repo.html_url,
        cloneUrl: repo.clone_url,
        sshUrl: repo.ssh_url,
        fullName: repo.full_name,
        owner: user.login,
      };
    }
    throw error;
  }
}

createRepository()
  .then((repo) => {
    console.log('\n📦 Repository details:');
    console.log(JSON.stringify(repo, null, 2));
  })
  .catch((error) => {
    console.error('\n❌ Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.status);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
    process.exit(1);
  });
