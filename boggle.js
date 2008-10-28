var dice = new Array(15);
	dice[00] = "LRYTTE"
	dice[01] = "VTHRWE"
	dice[02] = "EGHWNE"
	dice[03] = "SEOTIS"
	dice[04] = "ANAEEG"
	dice[05] = "IDSYTT"
	dice[06] = "OATTOW"
	dice[07] = "MTOICU"
	dice[08] = "AFPKFS"
	dice[09] = "XLDERI"
	dice[10] = "HCPOAS"
	dice[11] = "HCPOAS"
	dice[12] = "YLDEVR"
	dice[13] = "ZNRNHL"
	dice[14] = "OBBAOJ"
	dice[15] = "NMIQHU"

function build_random_board(dice){
	var values = new Array(15);
	for(i=0; i <= (dice.length - 1); ++i){
		var side = Math.floor(Math.random()*6);
        // console.log(i + " " + dice[i][side] + " : side: " + side)
		values[i] = dice[i][side];
	}
	return values;
}

function set_board_to(values){
	for(i=0; i<= (values.length -1); ++i){
        // console.log("Setting: cell_" + i);
        // console.log($("cell_" + i));
        value = values[i];
        if(value == 'Q') value == "Qu";
        
        console.log(value);
        // $('cell_' + i).insert(top: '<span class="letter">' + value + '</span>');
        // $('cell_' + i).down('span').addClassName('rot' + (Math.floor(Math.random()*3) + 1) )
	}
}

cell_clicked = function(mouse_event){
    cell = mouse_event.target.up('td')
    console.log("Clicked!: " + cell.id);
}

function add_observers_to_board(){
    for(i=0; i <= 15; ++i){
       $('cell_' + i).observe('click', cell_clicked);
    }
}

Event.observe(window, 'dom:loaded', function(){
    click_count = 0;
    var characters = build_random_board(dice);
    set_board_to(characters);
    add_observers_to_board();
})