/*
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

//My Solution

function bald(x){
    let hair = x.match(/[/]/gi);
  let shaved = x.replace(/[/]/gi, "-");

  if (hair === null || hair.length === 0) {
    return [shaved, "Clean!"];
  }
  if (hair.length === 1) {
    return [shaved, "Unicorn!"];
  }
  if (hair.length === 2) {
    return [shaved, "Homer!"];
  }
  if (hair.length === 3 || hair.length === 4 || hair.length === 5) {
    return [shaved, "Careless!"];
  }
  if (hair.length > 5) {
    return [shaved, "Hobo!"];
  }
}

//OR

/*
function bald(x) {
  const count = x.split('/').length - 1;
  let look;
  switch (count) {
    case 0: look = 'Clean'; break;
    case 1: look = 'Unicorn'; break;
    case 2: look = 'Homer'; break;
    case 3:
    case 4:
    case 5: look = 'Careless'; break;
    default: look = 'Hobo';
  }
  return [x.replace(/\//g, '-'), look + '!'];
}
*/