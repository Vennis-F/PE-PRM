class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

class Flower {
  constructor(id, categoryIds, title, imageUrl, description) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

export const CATEGORIES = [
  new Category("c0", "All", "#47fced"),
  new Category("c1", "Sunflower Orchid", "#f5428d"),
  new Category("c2", "Orchid Crow", "#f54242"),
  new Category("c3", "Orchid Fairy", "#f5a442"),
  // new Category("c4", "Orchid Beauty", "#f5d142"),
  // new Category("c5", "Lan Hải Đường", "#368dff"),
  // new Category("c6", "Lan Hổ", "#41d95d"),
  // new Category("c7", "Lan Mi Tông", "#9eecff"),
  // new Category("c8", "Lan Hổ", "#b9ffb0"),
  // new Category("c9", "French", "#ffc7ff"),
];

export const FLOWERS = [
  new Flower(
    "1",
    ["c1"],
    "Orchid Sea Path",
    "https://blogcaycanh.vn/uploads/caycanh/1423544011_hoa-hai-duong.jpg",
    "Orchid Sea Path is a Vanda orchid with blue flowers."
  ),
  new Flower(
    "2",
    ["c2"],
    "Miss Joaquim",
    "https://th.bing.com/th/id/R.cbd5848b98af061d0f4d90859d789ff8?rik=DKpV%2fwGyF7%2bhQA&riu=http%3a%2f%2fwww.vuonphonglan.vn%2fsites%2fdefault%2ffiles%2fphong-lan%2f2019-08%2fVanda-Miss-Joaquim+(1).jpg&ehk=zXvJsGMduXUQ7iOlASzq50kSbI%2bfDOHiDTuB%2fvGD83A%3d&risl=&pid=ImgRaw&r=0",
    "Miss Joaquim is a hybrid Vanda orchid and the national flower of Singapore."
  ),
  new Flower(
    "3",
    ["c3"],
    "Rothschildiana",
    "https://th.bing.com/th/id/R.f9ee10a1e91cb3f8cf58d5aab2b3aa81?rik=iKLxvPOuSrwpSQ&pid=ImgRaw&r=0",
    "Rothschildiana is a species of Vanda orchid with white to pale yellow flowers with dark spots."
  ),
  new Flower(
    "4",
    ["c1"],
    "Sunflower Orchid",
    "https://image.baonghean.vn/cw1000/Uploaded/2019/rkqskxqlxk/2018_12_05/bna_huongduong1_sachnguyen2634526_5122018.jpg",
    "The Sunflower Orchid is a popular and well-loved orchid that has large, colorful flowers and often has one or more flower spikes.."
  ),
  new Flower(
    "5",
    ["c2"],
    "Purple Orchid",
    "https://th.bing.com/th/id/R.d2e6cb1e6bbc7ecdec030fdd113cffab?rik=OMliXYBJGIEQDg&riu=http%3a%2f%2fmedia.tinmoi.vn%2f2016%2f03%2f21%2fy-nghia-cac-loai-hoa-ai-cung-phai-biet-tinmoi-3.jpg&ehk=tlEsovS%2b0%2fd57ZEHK7kTHFKUjQdp7h5MP7ElEkxI%2boE%3d&risl=&pid=ImgRaw&r=0",
    "Purple Orchid is a large-flowered orchid that usually has many flowers in each spike. They are known for their colors ranging from white to yellow, orange, pink, green and purple."
  ),
  new Flower(
    "6",
    ["c3"],
    "Orchid Dance Maiden",
    "https://hoadepviet.com/wp-content/uploads/2018/08/lan-vu-nu-1.jpg",
    "Orchid Dance Maiden is an orchid with small flowers and a unique shape. They are usually yellow, orange, brown and sometimes have colorful spots on the petals."
  ),
  new Flower(
    "7",
    ["c3"],
    "Chocolate Drop",
    "https://th.bing.com/th/id/OIP.BNqx6-O2frjTqKPTkDBCJAHaFM?pid=ImgDet&rs=1",
    "Chocolate Drop is a variation of the Orchidaceae with a color similar to chocolate. Petals have dark patches and have a distinctive shape."
  ),
  new Flower(
    "8",
    ["c2"],
    "Twinkle",
    "https://th.bing.com/th/id/R.f09e17ad9d0bf0d74e0d737e4ca3d766?rik=6wiWmvHv74DHWA&riu=http%3a%2f%2fvuonhoalan.net%2fupload%2fhieunm%2fimage%2fLan-vu-nu%2fOncidium-Twinkles.jpg&ehk=ln4vW%2fGIikTByEufUCvQP%2f8rha12OTSvfA%2fZZDsjcDU%3d&risl=&pid=ImgRaw&r=0",
    "Twinkle is a species of Orchid with small and numerous flowers. The color of the flowers is usually yellow, orange, white or red and creates a colorful landscape."
  ),
];
