
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';


function App() {  
  return (
  <Layout> 
    <div>
    <div class="hero hero--dark hero--shadow--lw">
  <div class="container">
    <h1 class="hero__title">User Stories</h1>
    <p class="hero__subtitle">
      How are you using the Stormwater Heatmap? <br />
   
     
 Send us your story and photo!</p>
 <Link
            className="button button--primary button--lg"
            to="mailto:courtney.baxter@tnc.org">
            Share your story
          </Link>



              <div></div>
    {/* <div>
      <button class="button button--secondary button--lg" href="mailto:courtney.baxter@tnc.org">
        Share your story
      </button>
    </div> */}
  </div>
</div>
    </div>
    </Layout>
  );
}

export default App;