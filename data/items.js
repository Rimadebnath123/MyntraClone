const items = [
    {
        id: '001',
        image: '../images/1.jpg',
        company: 'Nikon',
        item_name: 'Nikon COOLPIX A300 Point & Shoot Camera 20.1 MP',
        original_price: 1045,
        current_price: 606,
        discount: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: '../images/2.jpg',
        company: 'Blue Heaven ',
        item_name: 'Blue Heaven Festive Fair Tone Make Up Kit - Vanilla (10Pcs)',
        original_price: 2599,
        current_price: 1507,
        discount: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: '../images/3.jpg',
        company: 'HERO',
        item_name: 'Calcuttacycleco Hero Cycles For Mens And Boys 27.5 T Mountain/Hardtail Cycle',
        original_price: 1599,
        current_price: 495,
        discount: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: '../images/4.jpg',
        company: 'apple',
        item_name: 'macbook m1',
        original_price: 99999,
        current_price: 89999,
        discount: 10,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: '../images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: '../images/6.jpg',
        company: 'watch',
        item_name: 'Men ReactX watch',
        original_price: 14995,
        current_price: 14995,
        discount: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: '../images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: '../images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '009',
        image: '../images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '010',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '011',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '012',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/21/mH2Cx5kh_5810acdb83c14e4d990c116b537016ea.jpg',
        company: 'GoSriki',
        item_name: 'kurta set',
        original_price: 2000,
        current_price: 1500,
        discount: 25,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4,
            count: 2000,
        },
    },
    {
        id: '013',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29519034/2024/5/14/2435634c-8e53-4e8b-8c25-a557c61800c31715685619437EXTRALOVEBYLIBASWomenStripedFlaredSleevesKurta1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '014',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '015',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/29629130/2024/5/18/c78e6ae4-0d17-4a46-915e-d955d92487a01716000841537IndoEraBlackEmbroideredStraightKurtaSalwarWithDupattaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '016',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'GoSriki',
        item_name: 'kurta set',
        original_price: 2000,
        current_price: 1500,
        discount: 25,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4,
            count: 2000,
        },
    },
    {
        id: '017',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '018',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '019',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    },
    {
        id: '020',
        image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/24763480/2023/9/1/d0d8ce71-b755-4e00-a80b-8cd1d47f39331693557339486SangriaWomenPinkEmbroideredkurtaset1.jpg',
        company: 'sangira',
        item_name: 'kurta set',
        original_price: 1000,
        current_price: 500,
        discount: 50,
        return_period: 14,
        delivery_date: '23 Oct 2024',
        rating: {
            stars: 4.3,
            count: 1000,
        },
    }
];