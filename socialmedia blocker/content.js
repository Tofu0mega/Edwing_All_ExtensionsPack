const generateHTML = (pageName) => {
    return `
     
    <div class='c'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>STUDYING > ${pageName}</div>
    </div>
     `;
  };
  const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);

  
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
}</style>`;
  };
 
  const forbiddenUrls=["www.facebook.com","www.intagram.com","twitter.com"]
  const set = new Set(forbiddenUrls);

if(set.has(window.location.hostname)){
  document.head.innerHTML=generateSTYLES();
  document.body.innerHTML=generateHTML();
}

 