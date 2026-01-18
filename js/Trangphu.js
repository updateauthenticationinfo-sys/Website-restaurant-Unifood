                              /* ==========================================================================                                                                                          
                                         Copyright © 2026 Nguyen Manh Tuan. All rights reserved.
                                ======================================================================= */
      const foodData1 = [
            { name: "Gà Rán KFC - Combo Trưa", addr: "365 Lê Hồng Phong, Quận 10", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80", type: "ga", badge: "Partner", star: 4.5, price: "79.000đ", oldPrice: "99.000đ" },
            { name: "Phúc Long Coffee & Tea", addr: "42 Ngô Đức Kế, Quận 1", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", type: "nuoc", badge: "Yêu thích", star: 4.8, price: "45.000đ", oldPrice: "" },
            { name: "Cơm Tấm Cali - Quận 1", addr: "82 Nguyễn Huệ, Quận 1", img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&q=80", type: "com", badge: "Promo", star: 4.3, price: "55.000đ", oldPrice: "65.000đ" },
            { name: "Burger King - Phạm Ngũ Lão", addr: "210 Phạm Ngũ Lão, Quận 1", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", type: "ga", badge: "Hot", star: 4.6, price: "69.000đ", oldPrice: "" },
            { name: "Bánh Mì Huỳnh Hoa", addr: "26 Lê Thị Riêng, Quận 1", img: "./images/v1_142.png", type: "banh", badge: "VVIP", star: 4.9, price: "68.000đ", oldPrice: "" },
            { name: "Häagen-Dazs Ice Cream", addr: "Takashimaya, Quận 1", img: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&q=80", type: "nuoc", badge: "Premium", star: 5.0, price: "120.000đ", oldPrice: "" },
            { name: "Phở Lệ - Nguyễn Trãi", addr: "413 Nguyễn Trãi, Quận 5", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80", type: "nuoc", badge: "Partner", star: 4.7, price: "85.000đ", oldPrice: "" },
            { name: "Sushi Tei - Lý Tự Trọng", addr: "200 Lý Tự Trọng, Quận 1", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80", type: "nhat", badge: "VIP", star: 4.8, price: "250.000đ", oldPrice: "300.000đ" },
            { name: "Pizza 4P's - Bến Thành", addr: "8 Thủ Khoa Huân, Quận 1", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", type: "banh", badge: "VVIP", star: 4.9, price: "180.000đ", oldPrice: "" },
            { name: "Gong Cha - Trà Sữa", addr: "55 Nguyễn Đình Chiểu, Quận 3", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80", type: "nuoc", badge: "Partner", star: 4.5, price: "52.000đ", oldPrice: "" }
        ];
        const foodData2 = [
            { name: "Bún Đậu Mắm Tôm Cô Khàn", addr: "102 Cống Quỳnh, Quận 1", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=8", type: "bun", badge: "Hot", star: 4.2, price: "55.000đ", oldPrice: "" },
            { name: "Dimsum Tien Phat", addr: "18 Ký Hòa, Quận 5", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", type: "hoa", badge: "Partner", star: 4.6, price: "45.000đ", oldPrice: "" },
            { name: "Kichi Kichi - Lẩu Băng Chuyền", addr: "Vincom Đồng Khởi", img: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&q=80", type: "lau", badge: "VIP", star: 4.4, price: "299.000đ", oldPrice: "329.000đ" },
            { name: "Bò Bít Tết Hỏa Diệm Sơn", addr: "50 Nam Kỳ Khởi Nghĩa", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80", type: "au", badge: "", star: 4.3, price: "95.000đ", oldPrice: "115.000đ" },
            { name: "Salad Poki - Healthy Food", addr: "20 Bis Nguyễn Thị Minh Khai", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", type: "healthy", badge: "Yêu thích", star: 4.7, price: "89.000đ", oldPrice: "" },
            { name: "Trà Đào Cam Sả The Coffee House", addr: "86 Cao Thắng, Quận 3", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80", type: "nuoc", badge: "", star: 4.6, price: "49.000đ", oldPrice: "" },
            { name: "Bánh Cuốn Tây Hồ", addr: "127 Đinh Tiên Hoàng", img: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=600&q=80", type: "banh", badge: "", star: 4.1, price: "40.000đ", oldPrice: "" },
            { name: "Lẩu Cua Đất Mũi", addr: "50 Trần Hưng Đạo", img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=8", type: "lau", badge: "Hot", star: 4.5, price: "350.000đ", oldPrice: "" },
            { name: "Mì Ý Pasta Paradise", addr: "224 Nguyễn Thị Minh Khai", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80", type: "au", badge: "Partner", star: 4.4, price: "110.000đ", oldPrice: "150.000đ" },
            { name: "Chè Thái Ý Phương", addr: "380 Nguyễn Tri Phương", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", type: "che", badge: "Yêu thích", star: 4.7, price: "30.000đ", oldPrice: "" }
        ];
        const foodData3 = [
            { name: "King BBQ Buffet", addr: "Aeon Mall Tân Phú", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80", type: "nuong", badge: "VVIP", star: 4.6, price: "329.000đ", oldPrice: "379.000đ" },
            { name: "Highlands Coffee", addr: "Bitexco Financial Tower", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80", type: "nuoc", badge: "", star: 4.3, price: "35.000đ", oldPrice: "" },
            { name: "Bánh Xèo Ăn Là Ghiền", addr: "74 Sương Nguyệt Ánh", img: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=600&q=80", type: "banh", badge: "Yêu thích", star: 4.4, price: "80.000đ", oldPrice: "" },
            { name: "Sushi Hokkaido Sachi", addr: "139 Nguyễn Trãi", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80", type: "nhat", badge: "VVIP", star: 4.9, price: "400.000đ", oldPrice: "" },
            { name: "Cơm Niêu Sài Gòn", addr: "27 Tú Xương", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", type: "com", badge: "VIP", star: 4.5, price: "150.000đ", oldPrice: "" },
            { name: "Nem Nướng Nha Trang", addr: "300 Võ Văn Tần", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80", type: "banh", badge: "", star: 4.2, price: "55.000đ", oldPrice: "" },
            { name: "Texas Chicken", addr: "45 Hậu Giang", img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&q=80", type: "ga", badge: "Promo", star: 4.3, price: "89.000đ", oldPrice: "109.000đ" },
            { name: "Mì Quảng Sâm", addr: "8 Ca Văn Thỉnh", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", type: "mỳ", badge: "Partner", star: 4.6, price: "45.000đ", oldPrice: "" },
            { name: "Bánh Canh Cua 14", addr: "221 Trần Bình Trọng", img: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=600&q=80", type: "nuoc", badge: "", star: 4.5, price: "50.000đ", oldPrice: "" },
            { name: "Sinh Tố Five Boys", addr: "Bùi Viện, Quận 1", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&q=80", type: "nuoc", badge: "Hot", star: 4.7, price: "35.000đ", oldPrice: "" }
        ];
        const batches = [foodData1, foodData2, foodData3];
        let infiniteBatchCounter = 0; 
        let currentActiveFilter = 'all';
        const provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Bình Dương", "Đồng Nai", "Khánh Hòa", "Lâm Đồng", "Quảng Ninh", "Ninh Bình", "Vũng Tàu", "Huế", "Đà Lạt", "Nha Trang", "Phú Quốc"];
        window.onload = function() {
            const sel = document.getElementById('provinceSelector');
            provinces.sort().forEach(p => {
                let opt = document.createElement('option');
                opt.value = p; opt.innerHTML = p;
                sel.appendChild(opt);
            });
            renderFoodElements(batches[0]);
            infiniteBatchCounter = 1;
        };
        function toggleAccordion(element) {
            const isActive = element.classList.contains('active');
            document.querySelectorAll('.menu-category').forEach(item => item.classList.remove('active'));
            if(!isActive) {
                element.classList.add('active');
            }
        }
        function renderFoodElements(data) {
            const grid = document.getElementById("mainFoodGrid");            
            data.forEach(item => {
                const prepTime = Math.floor(Math.random() * 25) + 15;
                const distance = (Math.random() * 4.5 + 0.3).toFixed(1);
                let bClass = 'badge-promo';
                if(item.badge === 'Yêu thích') bClass = 'badge-fav';
                else if(item.badge === 'Partner') bClass = 'badge-partner';
                else if(item.badge === 'Hot') bClass = 'badge-hot';
                else if(item.badge === 'VVIP' || item.badge === 'Premium' || item.badge === 'VIP') bClass = 'badge-vvip';                
                const badgeTag = item.badge ? `<span class="status-badge ${bClass}">${item.badge}</span>` : '';
                const oldPriceTag = item.oldPrice ? `<span class="price-prev">${item.oldPrice}</span>` : '';
                const cardHtml = `
                    <article class="food-card">
                        <div class="food-thumbnail">
                            ${badgeTag}
                            <img src="${item.img}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="food-details">
                            <h3 class="food-title">${item.name}</h3>
                            <p class="food-loc">${item.addr}</p>
                            <div class="price-tag-group">
                                <span class="price-current">${item.price}</span>
                                ${oldPriceTag}
                            </div>
                            <div class="meta-info-footer">
                                <div class="stat-left">
                                    <i class="fa-solid fa-star"></i>
                                    <span>${item.star}</span>
                                    <span style="margin: 0 5px; opacity: 0.3;">•</span>
                                    <span>${distance}km</span>
                                </div>
                                <div class="meta-time">
                                    <i class="fa-regular fa-clock"></i> ${prepTime} phút
                                </div>
                            </div>
                        </div>
                    </article>
                `;
                grid.insertAdjacentHTML('beforeend', cardHtml);
            });
        }
        function handleLoadMore() {
            const btn = document.getElementById('btnInfinite');
            const loader = document.getElementById('ui-loader-spin');
            btn.style.display = 'none';
            loader.style.display = 'block';
            setTimeout(() => {
                const nextBatchIndex = infiniteBatchCounter % batches.length;
                const dataToRender = batches[nextBatchIndex];
                renderFoodElements(dataToRender);
                infiniteBatchCounter++;
                loader.style.display = 'none';
                btn.style.display = 'flex';
                window.scrollBy({ top: 300, behavior: 'smooth' });
            }, 700);
        }
        function applyFilter(type, element) {
            document.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
            element.classList.add('active');
            currentActiveFilter = type;
            const grid = document.getElementById("mainFoodGrid");
            const loadBtn = document.getElementById('btnInfinite');
            grid.innerHTML = ""; 
            if (type === 'all') {
                renderFoodElements(batches[0]);
                infiniteBatchCounter = 1;
                loadBtn.style.display = 'flex';
            } 
            else if (type === 'near') {
                const allItems = [...foodData1, ...foodData2, ...foodData3];
                const nearItems = allItems.sort(() => 0.5 - Math.random()).slice(0, 6);
                renderFoodElements(nearItems);
                loadBtn.style.display = 'none'; 
            } 
            else if (type === 'fav') {
                const allItems = [...foodData1, ...foodData2, ...foodData3];
                const favItems = allItems.slice(0, 10);
                renderFoodElements(favItems);
                loadBtn.style.display = 'none';
            }
        }
        window.addEventListener('scroll', function() {
            const sidebar = document.querySelector('.sidebar');
            if(window.scrollY > 50) {
                sidebar.style.boxShadow = '10px 0 30px rgba(0,0,0,0.05)';
            } else {
                sidebar.style.boxShadow = '4px 0 15px rgba(0,0,0,0.02)';
            }
        });

 