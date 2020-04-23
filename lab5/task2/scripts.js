let sum = 0;
//let count = 0;

function add_product() {

    let name = document.new_product.name.value;
    let cost = Number.parseFloat(document.new_product.cost.value);

    if (isNaN(cost))
    {
        alert("Введите корректную стоимость");
        return;
    }

    sum += cost;

    let new_li = document.createElement('li');
    let new_div = document.createElement('div');
    let new_p = document.createElement('p');
    let new_span = document.createElement('span');

    new_span.innerHTML = cost;

    //new_div.setAttribute("class", "product");
    //new_div.setAttribute("data-cost", cost);
    //new_div.setAttribute("id", count);

    products.appendChild(new_li);
    new_li.appendChild(new_div);
    new_div.appendChild(new_p);

    new_p.innerHTML = name + " - ";
    new_p.appendChild(new_span);
    //new_div.name = count;
    //count++;

    let new_button = document.createElement('input');
    new_button.type = "button";
    new_button.value = "Удалить";
    new_button.setAttribute("onclick", "remove_item(" + count + ")");
    //new_button.onclick = "remove_item()";

    new_p.appendChild(new_button);

    //count++;
}

function remove_item(index) {

    let liMas = document.querySelectorAll('#products li');
    liMas.forEach(li => {
        li.onclick = function() {
            sum -= parseInt(this.getElementsByTagName('span')[0].textContent, 10);
            this.parentNode.removeChild(this);
        }
    });
}

function show_sum() {
    sum_cost.value = sum;
}