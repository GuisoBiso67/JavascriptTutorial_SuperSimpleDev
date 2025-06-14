// 18A
/*
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () =>{
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/greeting');
xhr.send();
*/

// 18B
/*
fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text();
}).then((greeting) => {
  console.log(greeting);
}
*/

// 18C
/*
async function showGreeting(){
  try{
    await fetch('https://supersimplebackend.dev/greeting').then((response) => {
      return response.text();
    }).then((greeting) => {
      console.log(greeting);
    });
  }catch(error){
    console.log('Unexpected Error. Please try again later.');
  }
};
showGreeting();
*/

// 18D
/*
async function showGreeting(){
  try{
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Guilherme',
      })
    });

    const data = await response.text();
    console.log(data);
  }catch(error){
    console.log(`Error ${error}`);
  }
};
showGreeting();
*/

// 18G
async function showGreeting(){
  try{
    const response = await fetch('https://supersimplebackend.dev/greeting', {
      method: 'POST',
      header: {
        'Content-Type':'application/json',
      }
    });

    if(response.status >= 400){
      throw response;
    }

    const data = await response.text();
    console.log(data);

  }catch(error){
    if(error.status === 400){
      const errorMessage = await error.json();
      console.log(errorMessage);
    }else{
      console.log(`Network Error`);
    } 
  }
}

showGreeting();
