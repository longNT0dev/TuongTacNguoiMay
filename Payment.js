let cart_items = document.getElementById("cart_items");
let ListCart = JSON.parse(localStorage.getItem("ListCart"));
let total = document.getElementById("total");


ListCart.forEach(function(pr, index) {
    let html = `<li class="cart_items_list">
    <div class="li_name">
        <img src=${pr.src} width="50" height="50" style="border-radius:50%;margin-right:8px"> 
        <p style="width:150px">${pr.name}</p>
    </div>
    <div class="li_dongia">
        Đơn giá: ${pr.price/pr.soluong}
    </div>
    <div class="li_soluong">
        <button id="pd_minus_on_list_cart_btn${index}"><i class="fa-solid fa-minus"></i></button>
        <p>${pr.soluong}</p>
        <button id="pd_plus_on_list_cart_btn${index}"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="li_tongtien">
        Tổng tiền: ${pr.price}
    </div>
    <div class="li_delete">
        <button id="pd_delete_on_list_cart_btn${index}"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </li>`
    cart_items.insertAdjacentHTML("beforeend", html);

    
    total.innerText = (total.innerText - 0) + (pr.price - 0);

    let pd_delete = document.getElementById(`pd_delete_on_list_cart_btn${index}`);
    pd_delete.addEventListener("click", () => {
        ListCart.splice(index, 1);
        localStorage.setItem("ListCart", JSON.stringify(ListCart));
        location.reload();
    });

    let pd_minus = document.getElementById(`pd_minus_on_list_cart_btn${index}`);
    pd_minus.addEventListener("click", () => {
        pr.soluong = (pr.soluong - 0) - 1;
        if(pr.soluong <= 0) {
            ListCart.splice(index, 1);
            localStorage.setItem("ListCart", JSON.stringify(ListCart));
            location.reload();
        }
        localStorage.setItem("ListCart", JSON.stringify(ListCart));
        location.reload();
    });

    let pd_plus = document.getElementById(`pd_plus_on_list_cart_btn${index}`);
    pd_plus.addEventListener("click", () => {
        pr.soluong = (pr.soluong - 0) + 1;
        localStorage.setItem("ListCart", JSON.stringify(ListCart));
        location.reload();
    });

});
