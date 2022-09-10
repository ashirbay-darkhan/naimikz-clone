const data = {
    categories: [
        {
            id: 1,
            img: 'https://upload.naimi.kz/image/qRJ23M7AnmX8KCsx39YZM0BQEfOv8o10UbOoZGumFLiWBZGS5ROu1oQhL2PIWRUVkdd9onSPJMCBHm0PF2kMalnKUeBGz04nDRBq5F2ut?w=96&h=96&m=c',
            title: 'Строительство и отделка',
            description: 'Штукатуры, кафельщики, кровля и т.д',
            slug: 'otdelochnye-raboty',
            spec_count: 6094,
        },
        {
            id: 2,
            img: 'https://upload.naimi.kz/image/qRJ23RcvdeOCoMDeptADs9RsgSixjYAHSTmXFBjUHYG0rx4zJFir1pImQ8GsR3XA55jU7hpggno94wf2GNhYh0GLDeUoLP9KwPrbRqCXK?w=96&h=96&m=c',
            title: 'Бытовой ремонт',
            description: 'Сантехники, электрики, мебельщики и т.д',
            slug: 'remontnye-raboty',
            spec_count: 5020,
        },
        {
            id: 3,
            img: 'https://upload.naimi.kz/image/qRJ23G6iC7ZTdVAggRV52qZXEXBdEUO62zkSd6QcVxXl5OtQeUgIcVguTu7G9epTB0nvwUzwhmtfg8vcI7MlxBbCVsCe5ywRE6MBNeZnc?w=96&h=96&m=c',
            title: 'Помощь по дому',
            description: 'Уборка, химчистка, садовники и т.д',
            slug: 'domashnij-personal',
            spec_count: 3089,
        },
        {
            id: 4,
            img: 'https://upload.naimi.kz/image/qRJ230irmM8ToIIZZHqAEfo83OB3qPfmwjdo8zRe08fnjATsWyTdSFjLfLLnOV79dJEpmI8AfWT0qIADotxhqRJ5YodBD9R7Um6NSLZrQ?w=96&h=96&m=c',
            title: 'Ремонт и установка техники',
            description: 'Бытовая, компьютерная, сигнализации и т.д',
            slug: 'tekhnika-i-oborudovanie',
            spec_count: 778,
        },
        {
            id: 5,
            img: 'https://upload.naimi.kz/image/qRJ23TAOsfBXdg28f1ciOUthv3zAYNQT6Pe8nY7I9dUzfZRtWdjbYqjI45YcAunHTQlLlxwGG1wvbvix1aKfd6a5HaIwfO9wcTvZmk7TH?w=96&h=96&m=c',
            title: 'Уборка и санитария',
            description: 'Высотные работы, Уборка территорий',
            slug: 'uborka-i-sanitariya',
            spec_count: 1926 ,
        },
        {
            id: 6,
            img: 'https://upload.naimi.kz/image/qRJ23W7SuumP8gZyyWD1gKMsS8gFntIXP7hnZyqGf8Zj3fYbl3e57zTGaWaU9KtqSfkic6fpYOfbof66jNKZXMMB1IqvOj9fjF6vPYZYD?w=96&h=96&m=c',
            title: 'Грузоперевозки и доставка',
            description: 'Газели, курьеры, грузчики и т.д',
            slug: 'perevozka-i-dostavka',
            spec_count: 2120 ,
        },
        {
            id: 7,
            img: 'https://upload.naimi.kz/image/qRJ23uyD7Boot20awQPIPRBuB9CZ5l55bVe0AvGlUB52ZlNU9pes8owFYix18r0MKlvBo5q31yiX6txgdn0PCBd5nuowroCkcH73R8F9R?w=96&h=96&m=c',
            title: 'Услуги спецтехники',
            description: 'Услуги автовоза, Услуги автовышки, Услуги автокрана',
            slug: 'uslugi-spetstehniki',
            spec_count: 777 ,
        },
    ],

    
    sub_cat_main: [
        {p_id: 1, id: 1, title: 'Маляры и штукатуры', slug: 'malyary-i-shtukatury', spec_count: 2003, services: [{id: 1, title: "Service"},{id: 1, title: "Service 2"},]},
        {p_id: 1, id: 2, title: 'Плитка и кафель', slug: 'raboty-s-plitkoi-i-kafelem', spec_count: 984, services: {id: 2, title: "Service"}},
        {p_id: 1, id: 3, title: 'Разнорабочие', slug: 'raznorabochie', spec_count: 2237, services: [{id: 1, title: "Service"},]},  

        {p_id: 2, id: 1, title: 'Электрики', slug: 'elektriki', spec_count: 991,},
        {p_id: 2, id: 2, title: 'Услуги сантехника', slug: 'santehniki', spec_count: 814,},
        {p_id: 2, id: 3, title: 'Двери и замки', slug: 'dveri-i-zamki', spec_count: 424,},
    ],


    sub_cat: [
        {p_id: 1, title: 'Покраска внутренних стен', slug: 'pokraska-vnutrennih-sten'},
        {p_id: 1, title: 'Покраска обоев', slug: 'pokraska-oboev',},
        {p_id: 1, title: 'Покраска стен', slug: 'pokraska-sten',},
        {p_id: 2, title: 'Укладка кафеля на пол', slug: 'ukladka-kafelya-na-pol',},
        {p_id: 2, title: 'Укладка кафеля на стены', slug: 'ukladka-kafelya-na-steny',},
        {p_id: 2, title: 'Укладка мозаики на пол', slug: 'ukladka-mozaiki-na-pol',},

    ]

}
 


export default data