//별표(*)로 다아아몬드
for(let i=0; i<5; i++){
    let stars = '';
    for (let k=0; k<i+1; k++){
        stars += '*';
    }
    console.log(stars);
}

for(let i=0; i<5; i++){
    let stars = '';
    for(let k=0;k<5-i-1;k++){
        stars += ' ';
    }
    for(let k=0; k<i+1; k++){
        stars += '*';
    }
    console.log(stars);
}
for(let i=0; i<5; i++){
    let stars = '*';
    for(let k=0;k<5-i-1;k++){
        stars += '*';
    }
    for(let k=0; k<i+1; k++){
        stars += ' ';
    }
    console.log(stars);
}
for(let i=0; i<5; i++){
    let stars ='';
    for(let k=0; k<5-i; k++){
        stars +='*';
    }
    for(let k=0;k<i;k++){
        stars = ' ' +stars;
    }
    console.log(stars);
}
