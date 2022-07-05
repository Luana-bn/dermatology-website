$( document ).ready(function() {
 var newsItem = '<figure class="types types-border"><img src="{{image}}" alt="Foto de um animal" /><div class="treatment-box"><h3>{{title}}</h3><p class="description">{{description}}</p><p class="date">{{date}}</p></div></figure>';

 var url = "http://127.0.0.1:5500/api/news.json";

var container=$(document).find(".news .grid-treatment");

 $.get(url, function(response, status){
    var items = response.hits;
    
    for(var i= 0;i < items.length;i++){
        container.append(
            newsItem.replace("{{image}}",items[i].image)
                    .replace("{{title}}",items[i].title)
                    .replace("{{description}}",items[i].description)
                    .replace("{{date}}",$.datepicker.formatDate('dd M yy', new Date()))
            );
    }
  });
 





});

/***
<figure class="types types-border"><img src="img/animal4.jpeg" alt="Foto de um animal" /><div class="treatment-box"><h3>Ph da pele do seu animal</h3><p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, suscipit, possimus explicabo beatae esse corpor.</p><p class="date">Seg. 25-05-22</p></div></figure>
 * 
 * 
 */