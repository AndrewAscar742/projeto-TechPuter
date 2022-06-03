var acc = document.getElementsByClassName('accordion');
        var i;
        var len = acc.length;
        for(i = 0; i < len; i++){
            acc[i].addEventListener('click', function()
            {
                this.classList.toggle('active');
                var painel = this.nextElementSibling;
                if(painel.style .maxHeight) {
                    painel.style .maxHeight = null;
                } else {
                    painel.style.maxHeight = painel.scrollHeight + 'px'
                }
            })
        }