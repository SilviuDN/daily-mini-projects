const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));
        const increment = target / 200;
        // const c = Number( counter.innerText );
        const c = +counter.innerText;

        if( c < target){
            counter.innerText = ` ${Math.ceil(c + increment)}`;
            //CUM FUNCTIONEAZA? 
            //setTimeout e asynchronous si atunci de aici intervine browserul si scriptul continua cu urmatorul forEach?
            setTimeout(updateCounter, 1);            
        }else(
            counter.innerText = target
        )


    }

    updateCounter();

})