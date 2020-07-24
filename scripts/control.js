
var globals = {};


$(".level").each(function() {
    var $this = $(this);
    $this.click(function() {
        $('.selected').toggleClass('not-selected');
        $('.selected').toggleClass('selected');
        $this.toggleClass('not-selected');
        $this.toggleClass('selected');

        ai.level = $this.attr("id");
    });
});

$(".start").click(function() 
{
    var selectedDiffeculty = $('.selected').attr("id");
    var x = document.getElementsByName('ai');
    var y =""
for (var i = 0, length = x.length; i < length; i++) {
    if (x[i].checked) {
        y= x[i].value;
        break;
    }
}
    if(typeof selectedDiffeculty !== "undefined" && y !== "") 
    {
        var aiPlayer = new AI(selectedDiffeculty);
        globals.game = new Game(aiPlayer,y);
        aiPlayer.plays(globals.game);
        globals.game.start();
    }
    else
    { if(typeof selectedDiffeculty=="undefined" &&  y=="")
        {   window.alert("Select difficulty level and starting player");
        }
        else
        {
            if(typeof selectedDiffeculty== "undefined" )
            {
                    window.alert("Select difficulty level");

            }
            if(y=="" )
            {
                    window.alert("Select starting player");

            } 
        }
    }
});

 $(".cell").each(function() {
     var $this = $(this);
     $this.click(function() {
         if(globals.game.status === "running" && globals.game.currentState.turn === "X" && !$this.hasClass('occupied')) {
             var indx = parseInt($this.data("indx"));

             var next = new State(globals.game.currentState);
             next.board[indx] = "X";

             ui.insertAt(indx, "X");

             next.advanceTurn();

             globals.game.advanceTo(next);

         }
     })
 });
