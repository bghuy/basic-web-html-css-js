const newsContainer = document.querySelector('.news');
const newsData = [];

// Tạo 5 phần tử với tiêu đề và nội dung tương ứng
for (let i = 1; i <= 4; i++) {
    const newsItem = {
        title: `NEWS${i}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Expedita asperiores dicta dolorum veniam placeat voluptatibus aut fuga animi rerum, dolore quidem voluptatum repudiandae?
        Impedit quo rerum eum nulla, non ipsam!`,
    };
    newsData.push(newsItem);
}
const headerMenuContainer = document.querySelector('.header .nav-bar');
function createMenuElement(container) {
    for (let i = 1; i <= 5; i++) {
        const newsElement = document.createElement('div');
        newsElement.classList.add('menu');
        newsElement.textContent = `Menu${i}`;
        container.appendChild(newsElement);
    }
    container.style.width = '80%';
    container.style.padding = '0px 5px';
}


function createNewsElement(title, content) {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news-element');

    const titleElement = document.createElement('span');
    titleElement.classList.add('news-header');
    titleElement.style.backgroundColor = 'orange';
    titleElement.style.display = 'flex';
    titleElement.style.alignItems = 'center';

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow-left');
    arrowLeftElement.textContent = '↓';
    arrowLeftElement.style.cursor = 'pointer';

    titleElement.appendChild(arrowLeftElement);

    const titleTextElement = document.createElement('span');
    titleTextElement.textContent = title;

    titleElement.appendChild(titleTextElement);


    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow-right');
    arrowRightElement.textContent = '↕';
    arrowRightElement.style.cursor = 'pointer';
    titleElement.appendChild(arrowRightElement);
    titleElement.style.justifyContent = 'space-between';
    titleElement.style.color = 'white';

    const contentElement = document.createElement('div');
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = content;
    paragraphElement.style.width = 'inherit';
    contentElement.appendChild(paragraphElement);

    contentElement.style.display = 'block';

    arrowLeftElement.addEventListener('click', function () {
        if (contentElement.style.display === 'none') {
            titleElement.firstChild.textContent = '↓'
            contentElement.style.display = 'block';
            titleElement.style.color = 'white';
            titleElement.classList.remove('inactive');

        }
        else {
            contentElement.style.display = 'none';
            titleElement.classList.add('inactive');
            titleElement.firstChild.textContent = '▶'
            titleElement.style.color = 'black';

        }
    });

    newsElement.appendChild(titleElement);
    newsElement.appendChild(contentElement);
    return newsElement;
}



newsData.forEach((data) => {
    const newsElement = createNewsElement(data.title, data.content);
    newsContainer.appendChild(newsElement);
});
createMenuElement(headerMenuContainer);

const infoContainer = document.querySelectorAll('.answer');

// Biến để lưu trữ thông báo lỗi
let errorNamerDiv = null;
function validateNameInput() {

    const inputName = document.getElementById('input-name');
    const nameInputContainer = document.querySelector('.name-input');
    const nameValue = inputName.value.trim();
    const nameWords = nameValue.split(' ').filter(word => word !== '');
    let nameError = false;
    // Xóa thông báo lỗi hiện tại nếu có
    if (errorNamerDiv) {
        errorNamerDiv.remove();
        errorNamerDiv = null;
    }
    if (nameWords.length < 2) {
        errorNamerDiv = document.createElement('div');
        errorNamerDiv.textContent = 'Họ và tên chưa hợp lệ';
        errorNamerDiv.style.color = 'red';
        errorNamerDiv.style.width = '100%';
        errorNamerDiv.style.textIndent = '48%';
        nameInputContainer.insertAdjacentElement('afterend', errorNamerDiv);
        inputName.style.border = '2px solid red';
        nameError = true;
    }
    else {
        nameError = false;
        inputName.style.border = '';
    }
}
let errorPhoneDiv = null;
function validatePhoneNumberInput() {

    const inputPhone = document.getElementById('input-phoneNumber');
    const phoneInputContainer = document.querySelector('.phone-input');
    const phoneValue = inputPhone.value.trim();
    const phoneRegex = /^0[0-9]{9}$/; // Regex để kiểm tra số điện thoại

    // Xóa thông báo lỗi hiện tại nếu có
    if (errorPhoneDiv) {
        errorPhoneDiv.remove();
        errorPhoneDiv = null;
    }

    if (!phoneRegex.test(phoneValue)) {
        errorPhoneDiv = document.createElement('div');
        errorPhoneDiv.textContent = 'Số điện thoại chưa hợp lệ';
        errorPhoneDiv.style.color = 'red';
        errorPhoneDiv.style.width = '100%';
        errorPhoneDiv.style.textIndent = '48%';
        phoneInputContainer.insertAdjacentElement('afterend', errorPhoneDiv);
        inputPhone.style.border = '2px solid red';
        return false;
    } else {
        inputPhone.style.border = '';
    }
    return true;
}
let errorEmailDiv = null;
function validateEmailInput() {

    const inputEmail = document.getElementById('input-email');
    const emailInputContainer = document.querySelector('.email-input');
    const emailValue = inputEmail.value.trim();

    // Xóa thông báo lỗi hiện tại nếu có
    if (errorEmailDiv) {
        errorEmailDiv.remove();
        errorEmailDiv = null;
    }

    if (!emailValue.endsWith('@gmail.com')) {
        errorEmailDiv = document.createElement('div');
        errorEmailDiv.textContent = 'Email chưa hợp lệ';
        errorEmailDiv.style.color = 'red';
        errorEmailDiv.style.width = '100%';
        errorEmailDiv.style.textIndent = '48%';
        emailInputContainer.insertAdjacentElement('afterend', errorEmailDiv);
        inputEmail.style.border = '2px solid red';
    } else {
        inputEmail.style.border = '';
    }
}

let errorDeliveryDayInput = null;

function validateDeliveryDay() {
    const deliveryDayInput = document.getElementById('input-deliveryDay');
    const deliveryDayContainer = document.querySelector('.deliveryDay-input');
    const deliveryDayValue = deliveryDayInput.value;

    // Lấy ngày hôm nay
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Chuyển đổi ngày giao hàng thành đối tượng Date
    const deliveryDay = new Date(deliveryDayValue);

    // Xóa thông báo lỗi nếu có
    if (errorDeliveryDayInput) {
        errorDeliveryDayInput.remove();
        errorDeliveryDayInput = null;
    }

    // Kiểm tra nếu ngày giao hàng sau ngày hôm nay
    if (deliveryDay > today) {
        // Ngày giao hợp lệ
        deliveryDayInput.style.border = '';
    } else {
        // Ngày giao không hợp lệ
        errorDeliveryDayInput = document.createElement('div');
        errorDeliveryDayInput.textContent = 'Ngày giao hàng không hợp lệ.';
        errorDeliveryDayInput.style.color = 'red';
        errorDeliveryDayInput.style.width = '100%';
        errorDeliveryDayInput.style.textIndent = '48%';
        deliveryDayContainer.insertAdjacentElement('afterend', errorDeliveryDayInput);
        deliveryDayInput.style.border = '2px solid red';
    }
}

function validateGender() {
    const genderInputs = document.getElementsByName('gender');
    let selectedGender = null;

    // Lặp qua tất cả các phần tử input có name="gender"
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            if (selectedGender === null) {
                // Chưa có giới tính được chọn trước đó
                selectedGender = genderInputs[i].value;
            } else {
                // Đã có một giới tính được chọn trước đó
                selectedGender = null; // Đặt giá trị chọn giới tính là null để đánh dấu là đã chọn cả hai
                break; // Dừng vòng lặp nếu đã tìm thấy cả hai giới tính được chọn
            }
        }
    }

    // Kiểm tra kết quả chọn giới tính
    if (selectedGender === null) {
        // Người dùng không chọn giới tính hoặc đã chọn cả hai giới tính
        const errorDiv = document.getElementById('gender-error');
        if (!errorDiv) {
            // Tạo thông báo lỗi nếu chưa tồn tại
            const errorDiv = document.createElement('div');
            errorDiv.id = 'gender-error';
            errorDiv.textContent = 'yêu cầu chọn giới tính';
            errorDiv.style.color = 'red';
            errorDiv.style.width = '100%';
            errorDiv.style.textIndent = '48%';
            const genderContainer = document.querySelector('.gender-input');

            genderContainer.insertAdjacentElement('afterend', errorDiv);
        }
    } else {
        // Người dùng đã chọn giới tính hợp lệ
        const errorDiv = document.getElementById('gender-error');
        if (errorDiv) {
            errorDiv.remove();
            errorDiv = null;
        }
    }
}
function validateAddress() {
    const addressInput = document.getElementById('input-address');
    const addressValue = addressInput.value.trim();

    if (addressValue === '') {
        // Người dùng không nhập địa chỉ
        const errorDiv = document.getElementById('address-error');
        if (!errorDiv) {
            // Tạo thông báo lỗi nếu chưa tồn tại
            const errorDiv = document.createElement('div');
            errorDiv.id = 'address-error';
            errorDiv.textContent = 'Vui lòng nhập địa chỉ.';
            errorDiv.style.color = 'red';
            errorDiv.style.width = '100%';
            errorDiv.style.textIndent = '48%';
            const addressContainer = document.querySelector('.address-input');

            addressInput.style.border = '2px solid red';
            addressContainer.insertAdjacentElement('afterend', errorDiv);
        }
    } else {
        // Người dùng đã nhập địa chỉ
        const errorDiv = document.getElementById('address-error');
        if (errorDiv) {
            // Xóa thông báo lỗi nếu tồn tại
            addressInput.style.border = '';
            errorDiv.remove();
        }
    }
}
function validateFormInput() {
    validateNameInput();
    validatePhoneNumberInput();
    validateEmailInput();
    validateDeliveryDay();
    validateGender();
    validateAddress();
}
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', validateFormInput);

function highlightProduct() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.style.cursor = 'pointer';
        product.addEventListener('click', () => {
            if (product.style.backgroundColor === '') {
                // Nếu sản phẩm đã có màu nền cam, hủy bỏ màu nền
                product.style.backgroundColor = 'orange';
            }
            else if (product.style.backgroundColor === 'orange') {
                product.style.backgroundColor = '';
            }
        });
    });
}
window.addEventListener('load', highlightProduct);
// Lấy phần tử button bằng cách sử dụng id của nút "clear-button"
const clearButton = document.querySelector('.clear-button');

// Gán sự kiện click cho nút "clear-button"
clearButton.addEventListener('click', function () {
    // Lấy danh sách tất cả các phần tử input và checkbox
    const inputElements = document.querySelectorAll('input');

    // Lặp qua danh sách các phần tử input và checkbox và xóa nội dung và giá trị của chúng
    inputElements.forEach(function (inputElement) {
        if (inputElement.type === 'checkbox') {
            inputElement.checked = false; // Bỏ chọn checkbox
        } else {
            inputElement.value = ''; // Gán giá trị rỗng để xóa nội dung
        }
    });
});

// Lấy tất cả các phần tử có lớp là "product"
const productElements = document.querySelectorAll('.product');
const addButton = document.querySelector('.addButton');

addButton.addEventListener('click', function () {
    const cartItemsContainer = document.querySelector('.cartItems');

    // Lặp qua danh sách các phần tử "product"
    productElements.forEach(productElement => {
        // Kiểm tra xem phần tử có background màu cam hay không
        if (productElement.style.backgroundColor === 'orange') {
            // Tạo một phần tử mới để thêm vào thẻ div "cartItems"
            const cartItem = document.createElement('div');
            cartItem.textContent = productElement.textContent;
            cartItem.style.cssText = `
        width: inherit;
        text-align: center;
        font-size: 20px;
        height: fit-content;
        padding: 5px;
        border: 1px solid gray;
        margin: 3px;
        border-radius: 5px;
      `;
            cartItem.classList.add('product');
            cartItemsContainer.appendChild(cartItem);
        }
    });
});

const addAllButton = document.querySelector('.addAllButton');

addAllButton.addEventListener('click', function () {
    const cartItemsContainer = document.querySelector('.cartItems');

    // Lặp qua danh sách các phần tử "product"
    productElements.forEach(productElement => {
        // Kiểm tra xem phần tử có background màu cam hay không

        // Tạo một phần tử mới để thêm vào thẻ div "cartItems"
        const cartItem = document.createElement('div');
        cartItem.textContent = productElement.textContent;
        cartItem.style.cssText = `
        width: inherit;
        text-align: center;
        font-size: 20px;
        height: fit-content;
        padding: 5px;
        border: 1px solid gray;
        margin: 3px;
        border-radius: 5px;
      `;
        cartItem.classList.add('product');
        cartItemsContainer.appendChild(cartItem);

    });
});

const cartItems = document.querySelector('.cartItems');
cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('product')) {
        event.target.classList.toggle('orange-background');
    }
});


function handleRemoveButton() {
    const cartItems = document.querySelector('.cartItems');
    const products = cartItems.querySelectorAll('.orange-background');

    products.forEach(product => {
        product.remove();
    });
}

const removeButton = document.querySelector('.removeButton');
removeButton.addEventListener('click', handleRemoveButton);

function handleRemoveAllButton() {
    const cartItems = document.querySelector('.cartItems');
    const products = cartItems.querySelectorAll('.product');
    products.forEach(product => {
        product.remove();
    });
}
const removeAllButton = document.querySelector('.removeAllButton');
removeAllButton.addEventListener('click', handleRemoveAllButton);


