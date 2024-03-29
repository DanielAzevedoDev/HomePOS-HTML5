function adicionar_montante_input_modal(value){
    adicionar_valor_input_modal_generic(document.getElementById("amount"),value)
}
function adicionar_valor_input_modal(value) {
    adicionar_valor_input_modal_generic(document.getElementById("code"),value)
}
function adicionar_valor_input_modal_generic(modal_in,value) {
    if(validate_valid_decimal(modal_in,value))
        return;
    modal_in.value=modal_in.value.concat(value);
}

function validate_valid_decimal(modal_in,value){
    return ("."=== value || ","===value)&&modal_in.value.includes(value);
}

function limpar(modal_in){
    modal_in.value=0;
}

function apagar(modal_in){
    if(modal_in.value.length<2){
        limpar(modal_in)
    }else{
        modal_in.value.slice(0, -1);
    }
}

function check_valid_input_key(event){
    let key = event.key;
    if(validate_valid_decimal(modal_in,value))
    const VALID_CHAR = '0123456789.,';
    return VALID_CHAR.includes(key);
}

var ping = "pong";
