// https://www.dwitter.net/d/10534

const x = c.getContext('2d');
const S = Math.sin
const C = Math.cos


function u(t) {
  x.fillRect(0,0,i=2e3,i)
  for(t+=160;p=i&1,m=t/C(t/i)+p*(t/2+i%t),i--;)x.clearRect(
    960+m*S(n=t/9+i*i)*C(!p*i/t),
    540+m*C(n+p*2),s=3-C(n)*3,s)
}

startT = +new Date();
(loop=()=>requestAnimationFrame(loop)&&u((new Date()-startT)/1000))();
