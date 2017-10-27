function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};
var likedProfiles = [];
var profileNumber = 0;

function App(){
    let _tinderService,
        _tinderElement,
        _likeElement,
        _dislikeElement,
        _currentTinderData,
        _totalLikes = 0,
        _totalDislikes;
    function init(){
        console.log('init app');
        _tinderService = new TinderServices();
        _tinderElement = document.querySelector('.tinder-app');
        loadTinderData();
    }
    function loadTinderData(){
        _tinderService.loadTinder()
            .then(function(data){
                console.log('yes');
                _currentTinderData = data;
                updateTinderUI(data);
                console.log(data);
            })
            .catch (function(reject){
                console.log('spijtig');
            })
    }

    function updateTinderUI(data){
        console.log('update Tinder UI');
        let tempStr = '';
        let random = Math.floor((Math.random() * 500) + 1);
        console.log(data);
        console.log(random);
        tempStr =`
        <div class="row justify-content-md-center">
        <div class="card text-center">
                <img src="${data.results[random].picture.large}" alt="Card image cap" class="profilePicture card-img-top">
                <div class="card-body">
                <h4 class="profileName card-title">Name: ${data.results[random].name.first} ${data.results[random].name.last}</h4>
                <p class="location card-text">Place: ${data.results[random].location.state}</p>
                <p class="nat card-text">Nationality: ${data.results[random].nat}</p>
                <p class="liked card-text"> Likes: ${likedProfiles.length} </p>
            </div>
            <div class="row justify-content-md-center">
            <div class="col">
            <button class="btn btn-success btn-lg btn-block like">Like</button>
            </div>
            <div class="col">
            <button class="btn btn-danger btn-lg btn-block dislike">Dislike</button>
            </div>
            </div>
            </div>

</div>`;
        _tinderElement.innerHTML = tempStr;
        var buttonLike = document.querySelector(".like");
        var buttonDislike = document.querySelector(".dislike");

        // Like knop laad volgend profiel en slaat het profiel op in de array
        buttonLike.onclick = function(){
            likedProfiles.push(data.results[random].login.username);
            updateTinderUI(data);
            console.log(likedProfiles);
        }
        // Dislike knop laad volgende profiel
        buttonDislike.onclick = function () {
            updateTinderUI(data);
            console.log("disliked");
        }
        /*_likeElement = document.querySelector('.like').addEventListener("click",function(ev){
           liked();
        });
        */
    }
    
    return {
        init:init
    }
};
document.querySelector('.btn').addEventListener('click',function(ev){
    const app = new App();
    app.init();
})