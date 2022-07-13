function adduser()
{
        player_1_name= document.getElementById("player1_username");
        player_2_name= document.getElementById("player2_username");
        localStorage.setItem("player_1_name", player_1_name);
        localStorage.setItem("player_2_name", player_2_name);
        window.location="quiz_game_page.html"
}