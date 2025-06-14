'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e9f128e9bb7bcf2155b5db726a0b263",
"assets/AssetManifest.bin.json": "9fbea33da04b6094d1157b1785842c3c",
"assets/AssetManifest.json": "86e9fc15a36d8e2213f2a0b48acb9e2e",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/shantell_sans/ShantellSans-Bold.ttf": "3f27bd4b2d3b52e2a070784ccc0bb6f2",
"assets/assets/fonts/shantell_sans/ShantellSans-ExtraBold.ttf": "7f33160b6a6ff926451c11fa753659cd",
"assets/assets/fonts/shantell_sans/ShantellSans-Italic.ttf": "dd649de8940523775efcace606541e62",
"assets/assets/fonts/shantell_sans/ShantellSans-Light.ttf": "4c7abd86e9797d0c26f93f5fb34ce938",
"assets/assets/fonts/shantell_sans/ShantellSans-Medium.ttf": "e7e23424662df693e295dbce4e29ab57",
"assets/assets/fonts/shantell_sans/ShantellSans-Regular.ttf": "eea56a073c0622f7157892918d1c336b",
"assets/assets/fonts/shantell_sans/ShantellSans-SemiBold.ttf": "70f404c91428f6427571f1684a62ba56",
"assets/assets/images/certificates/ccic_Certificate_EslamFaresElazb.jpg": "da366476724fb3d7d8b1d9ed4c36895d",
"assets/assets/images/certificates/DartCourse_Certificate_EslamFaresElazb.jpg": "192720146d3f34999f6290ca2e8db207",
"assets/assets/images/certificates/flutter_advanced_course_bloc_MVVM_2023.jpg": "121530123a726c466905fdd00e89644c",
"assets/assets/images/certificates/flutter_payment.jpg": "6061efedd127a38ef801ab100e519158",
"assets/assets/images/certificates/HumanRecourcesEssentialsCourse_Certificate_EslamFaresElazb.jpg": "d344797f1a8cad1966fb491539e9645b",
"assets/assets/images/certificates/inout_Certificate_EslamFaresElazb.jpg": "611d90ac44f2483f77c6a1c3eb95adea",
"assets/assets/images/certificates/IntroductionToMobileDevelopmentCourse_Certificate_EslamFaresElazb.jpg": "b21de83039bcf5e3dcf3c43df7db6515",
"assets/assets/images/certificates/ITDS_Certificate_EslamFaresElazb.jpg": "35070c6d484e5977abcaf8ed42c5b54c",
"assets/assets/images/certificates/programming_Certificate_EslamFaresElazb.jpg": "07056e81d85a97d970e61a1019e10e11",
"assets/assets/images/certificates/VirtualEmployabilitySkillsTrack_EslamFaresElazb.jpeg": "a16b56304d02942e77f68b43baaa4ede",
"assets/assets/images/personal/coffee.svg": "7a23c34356aaf070b65727cde4e3beb6",
"assets/assets/images/personal/complexity.svg": "17c1001baac9aa408cd57da0aecd7dca",
"assets/assets/images/personal/earth.svg": "cfcd9e658e8b4548820c598cbd9ea1e9",
"assets/assets/images/personal/galaxy.svg": "b3eee09b3b7e4c2d46b48d7251a1172f",
"assets/assets/images/personal/logo/f_logo_black.svg": "55db78e13b46326d422eb94bfee7c780",
"assets/assets/images/personal/mess.svg": "b59fce5ddc693a9b94bb45cee08fe020",
"assets/assets/images/personal/message.svg": "49a173c85f947df057d909efd2ec793f",
"assets/assets/images/personal/my_showcase_style.png": "43736082a1c27310b45d5925fe1e9fb4",
"assets/assets/images/personal/work_stump.svg": "bd58f85eb6175c38388f31d105b1a29a",
"assets/assets/images/projects/ai_chat_bot.png": "9d41e8eb12bb98afd6007d8a788839df",
"assets/assets/images/projects/akar_com/1.png": "05c48b4a48b87edf278aec10c15d53ff",
"assets/assets/images/projects/akar_com/2.png": "26604881d7d5bf592855c881231b9cb5",
"assets/assets/images/projects/akar_com/3.png": "a280059e008f689fd17983ef41d5ed42",
"assets/assets/images/projects/akar_com/4.png": "fc6b48e605d54ad0d77ea59b1667ec83",
"assets/assets/images/projects/akar_com/5.png": "be36732b93797a819c3fa01ee6884dd3",
"assets/assets/images/projects/akar_com/6.png": "850a5164b5bfcd2c1f443fb0bf465622",
"assets/assets/images/projects/akar_com/7.png": "81aac789c52e57d4204dcb889d55958c",
"assets/assets/images/projects/akar_com/8.png": "965f22f1533b1d6fdec6065ec4d5cafa",
"assets/assets/images/projects/akar_com/logo.png": "4d1c629b0b6c095f406325a47eb1ba5e",
"assets/assets/images/projects/animated_buttons.png": "6adf04371ccfdb14959e97d8eee42250",
"assets/assets/images/projects/ayah_every_day/1.png": "78ba7fe45dc1e0e03ddcfaae32388c26",
"assets/assets/images/projects/ayah_every_day/logo.png": "931b28239ea72f5ecc0e21db9f9f4bb3",
"assets/assets/images/projects/book_hub/1.png": "92c129b56e0ef33fd0036627fec8ec11",
"assets/assets/images/projects/book_hub/2.png": "f9473017468f0082505cbcc604e5313f",
"assets/assets/images/projects/book_hub/3.png": "0ac8a937f210b02415afb8c604fd5ce7",
"assets/assets/images/projects/book_hub/4.png": "24486e9c2170db36b09c885932ec085f",
"assets/assets/images/projects/book_hub/5.png": "96dd4b0596c636f8954863a5f805432b",
"assets/assets/images/projects/book_hub/6.png": "f9b171ca3d7b401e809ff4358485ac59",
"assets/assets/images/projects/book_hub/7.png": "918722799635bfcbbf4bbbbf362e4ba9",
"assets/assets/images/projects/book_hub/8.png": "045dab79aba1c02cedd3e03341d57493",
"assets/assets/images/projects/book_hub/9.png": "17e51d93372f63b6675ec77b5e377e62",
"assets/assets/images/projects/book_hub/logo.png": "2bbb81ba358c5105a2b4ac1721d818f1",
"assets/assets/images/projects/design_patterns.png": "0274f5986b14139edd72021ccbd1326c",
"assets/assets/images/projects/dhb_app/1.png": "25c0d186482e49d3eecb17c98d4fb58b",
"assets/assets/images/projects/dhb_app/2.png": "992d0b159df1ef338b8da48c8ca60a54",
"assets/assets/images/projects/dhb_app/3.png": "3e7b378039f99b7963a7ca09df64107a",
"assets/assets/images/projects/dhb_app/4.png": "c604e09d8dad1217be50def16908d324",
"assets/assets/images/projects/dhb_app/5.png": "b94f892ec9754d5c94851fe705f85607",
"assets/assets/images/projects/dhb_app/6.png": "4deba5fa361568fc4a0e0b88cc3ca6dc",
"assets/assets/images/projects/dhb_app/logo.png": "806b3fca7686b745be6bb0c327e3a87c",
"assets/assets/images/projects/gate_plus/1.png": "e40aba67775143db4efe0322520b9dcb",
"assets/assets/images/projects/gate_plus/logo.png": "80e56bc117eebee21209acd54c50dfa2",
"assets/assets/images/projects/graphql_notes.png": "45eda8f8a37c58819a6100631b8c7465",
"assets/assets/images/projects/iron_man.png": "8708dc927d907d844431378307225a16",
"assets/assets/images/projects/notee.png": "264a912225cccd84854bd8ffe39658b3",
"assets/assets/images/projects/pivot/1.png": "3da3d2664885daf453beac64bce48b83",
"assets/assets/images/projects/pivot/2.png": "e48aff581b32c1b18f15403d284185a8",
"assets/assets/images/projects/pivot/3.png": "8453958ae1a2f21a7b39c103b42b69b1",
"assets/assets/images/projects/pivot/4.png": "48e6dcd2e278e17964ab64fccc0401e4",
"assets/assets/images/projects/pivot/5.png": "a6566735f2ef506e8deba04829a86a05",
"assets/assets/images/projects/pivot/6.png": "94883ed5bda2e06ee985023609b0470e",
"assets/assets/images/projects/pivot/7.png": "8f230e67cd2d25e104b1d8aff348b88d",
"assets/assets/images/projects/pivot/8.png": "20b750c2c685d69b7450b2bc6c8b5d37",
"assets/assets/images/projects/pivot/9.png": "f935f3be3a98a6a70b2d03ea452e8340",
"assets/assets/images/projects/pivot/logo.png": "d76ba9d0fd808104d9d44834483ca3da",
"assets/assets/images/projects/pulse_x.png": "4583c5c8f45338f72f4ac6001faff5ca",
"assets/assets/images/projects/takallam/1.png": "17bc68afdd13d22516b7b33b88204651",
"assets/assets/images/projects/takallam/2.png": "5b2bf83b44a9d93cc1d48c60863f884f",
"assets/assets/images/projects/takallam/3.png": "469cbdf982afdeb7813331f7f486dc6a",
"assets/assets/images/projects/takallam/4.png": "d73df23cadc4ddba716466b837242463",
"assets/assets/images/projects/takallam/5.png": "e73a395f7e61126de59f2b1e9d129bfa",
"assets/assets/images/projects/takallam/6.png": "378c3b0c65a648458423d0d808dedb2b",
"assets/assets/images/projects/takallam/7.png": "4278929dec2dcfbe46c3c81efa362a00",
"assets/assets/images/projects/takallam/8.png": "506df376a392118ed108fb3ecb28c20b",
"assets/assets/images/projects/takallam/logo.png": "e70c6c5d46ee71428b102f290bae4f3c",
"assets/assets/images/projects/tasbih/1.png": "8b6a0f8e29faf530a9d41ee6232f8064",
"assets/assets/images/projects/tasbih/2.png": "6b56d3760ccb816a963ceee58ea077c9",
"assets/assets/images/projects/tasbih/logo.png": "be53b0d08e2d56105e3b0827784810f0",
"assets/assets/images/projects/the_golden_land.png": "c862492f15f121d0f849779928c76f74",
"assets/assets/images/projects/thread.png": "23c161c332c9518d5a6910b17d70d814",
"assets/assets/images/projects/umrah_gift/1.png": "452a6bdbd5e82c1dcf39cfdb85f034ce",
"assets/assets/images/projects/umrah_gift/2.png": "cb778283fc71e0df3bdfff7e01f046cb",
"assets/assets/images/projects/umrah_gift/3.png": "571a61b28800aa2912bcd4fc81f657e3",
"assets/assets/images/projects/umrah_gift/4.png": "34f740e7fa716fee96297f9afb9cd7b5",
"assets/assets/images/projects/umrah_gift/5.png": "5ac4f651fc8c748ae9981e29ca94f2ac",
"assets/assets/images/projects/umrah_gift/6.png": "97e1bc6c37f2b3cf975309cf4492f265",
"assets/assets/images/projects/umrah_gift/7.png": "f9d2a356586ade2e900731523c04d087",
"assets/assets/images/projects/umrah_gift/8.png": "a46bcea10666857d2e2ac485d48f0a7b",
"assets/assets/images/projects/umrah_gift/logo.png": "b3e8fb5c98aa492186fc82731365afaf",
"assets/assets/images/projects/whatsapp_direct_chat/1.png": "e2c01d2a1164006a13dbbed3c0acc6df",
"assets/assets/images/projects/whatsapp_direct_chat/2.png": "3da135c53d5c8c364ef107f32f2e312b",
"assets/assets/images/projects/whatsapp_direct_chat/logo.png": "a729a00de582532ba7c190390fbdc3c8",
"assets/assets/images/projects/x5_smart/1.png": "93d6b660d004d32f50746b97ef6b4f13",
"assets/assets/images/projects/x5_smart/2.png": "4c39173622c5afa3bea9e23085aa2fa7",
"assets/assets/images/projects/x5_smart/3.png": "336e720d79bd0c59b638f879789cddb7",
"assets/assets/images/projects/x5_smart/4.png": "b86114d4f6ff103db569e902759ec62b",
"assets/assets/images/projects/x5_smart/5.png": "8db206e7364953506b622777a1a86d51",
"assets/assets/images/projects/x5_smart/logo.png": "b6b5c61c0197b20b3e78f5853fde5a7d",
"assets/assets/images/projects/xo/1.png": "7fc86e34e3127b2e5127607ffc44e78e",
"assets/assets/images/projects/xo/2.png": "3da3f135af9d3ea7cbecd7a4c1422b33",
"assets/assets/images/projects/xo/logo.png": "c3f9dcc0d4ec4e70de7b7641cd06955b",
"assets/assets/images/skills/css.png": "098058dbd40275e4fd52dc8992f9ac69",
"assets/assets/images/skills/c_sharp.png": "9b2861db37e18dbd878cce55937de3cf",
"assets/assets/images/skills/dart.png": "8dbbf1e2aab53da962ffc21fcf1cbd9b",
"assets/assets/images/skills/firebase.png": "fff771e71b8b961c0f9f8581544d4d55",
"assets/assets/images/skills/flutter_small.png": "19eac4a3c214eedc3e25539797f4232b",
"assets/assets/images/skills/git.png": "ceff9acda02c4c8337cc1cee1ec4f2a3",
"assets/assets/images/skills/html.png": "ace2b05d3ab81cfa3cfe0a647d63a06f",
"assets/assets/images/skills/python.png": "46da952fc2556975fe3b510373de9e90",
"assets/assets/images/tools/android_studio.png": "ec11127c09156cfb2e56f118857c042d",
"assets/assets/images/tools/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/tools/figma.png": "b304c0005d2ea13f101d556705726c00",
"assets/assets/images/tools/flutter.svg": "fae6a382059c0b50202d0acd3edc9d2f",
"assets/assets/images/tools/github.png": "855faa35e9b67284a8b21d0879886496",
"assets/assets/images/tools/gitlab.png": "2b85f650c508fad0b99b423003b62f48",
"assets/assets/images/tools/graphql.svg": "6786fc1daa147989923f76d610e71692",
"assets/assets/images/tools/html5.svg": "10328348fe4795e4153dd39118804af4",
"assets/assets/images/tools/photoshop.png": "07a0fdccabe418ef609f1306443537d8",
"assets/assets/images/tools/postman.png": "1b47d3344a6f9a99296b33877d2b39ab",
"assets/assets/images/tools/python.svg": "26f5129d3abd6d3232bcd2d8cd80a012",
"assets/assets/images/tools/visualstudio.png": "3c601b3f6033f6b7e81e1c7dbb7adfaf",
"assets/assets/images/tools/vs_code.png": "94f814e2bafda241b5ffd06b272a063f",
"assets/assets/images/tools/xcode.png": "add03d0a45efab61d157373cc9dfe875",
"assets/assets/images/tools/xd.png": "cd448c3459333298fa47416d20ad2652",
"assets/assets/images/van_gogh/blossom.jpg": "edd66f35236f9c40230f1661b6f591ba",
"assets/assets/images/van_gogh/irises.jpg": "635508d65ecf46f0d10fe99c3a7e0633",
"assets/assets/images/van_gogh/the-harvest.jpg": "728eeed80696e11c7aa2bd300a5c91e3",
"assets/assets/images/van_gogh/the-potato-eaters.jpg": "6b3d9a5439c71c19f48d5c212af731cc",
"assets/assets/images/van_gogh/the-starry-night.jpg": "e6510bbbc3323389a97301589c1d23f1",
"assets/assets/images/van_gogh/wheat-field-with-cypresses.jpg": "840970e2bd83dc59ffdf05e29f9ed5e4",
"assets/FontManifest.json": "0f73c5a79ef8f2f6d2f42497c59ed9cb",
"assets/fonts/MaterialIcons-Regular.otf": "22ced8ff00eadcd4b0c0c57fab6143dd",
"assets/NOTICES": "50f54e58578b09ecc47c473b3fb52a1e",
"assets/packages/atlas_icons/lib/fonts/achievement/achievement.ttf": "b4aaadf0bf250f17427edc2bf8d6fffa",
"assets/packages/atlas_icons/lib/fonts/arrow/arrow.ttf": "b1de896027e8f8bce86ecb62033361bb",
"assets/packages/atlas_icons/lib/fonts/audio/audio.ttf": "3f1061077885938f7d7950997d204c5d",
"assets/packages/atlas_icons/lib/fonts/basic-ui/basic-ui.ttf": "66ce98cbb527bcc6ebe7ee107c5b4c7b",
"assets/packages/atlas_icons/lib/fonts/business-finance/business-finance.ttf": "f2acea65ddcc3cc9f4f603eeda551ef0",
"assets/packages/atlas_icons/lib/fonts/christmas/christmas.ttf": "0d5b397bbefbc79ec6962cab78cdfa7a",
"assets/packages/atlas_icons/lib/fonts/cinema/cinema.ttf": "2c4d6cff8e18f0d725ff07aa98ef5951",
"assets/packages/atlas_icons/lib/fonts/communication/communication.ttf": "98765079271bc5f10b094f70ec20ef35",
"assets/packages/atlas_icons/lib/fonts/construction/construction.ttf": "cd4e1da1de050086fca243af5904e782",
"assets/packages/atlas_icons/lib/fonts/content-box/content-box.ttf": "bdac94c1cf513f6765423de96650ca97",
"assets/packages/atlas_icons/lib/fonts/data-document/data-document.ttf": "a9a08ede494be44999414f064b76e564",
"assets/packages/atlas_icons/lib/fonts/ecology/ecology.ttf": "b83e0c5a4760275984251b83c4ae8288",
"assets/packages/atlas_icons/lib/fonts/electronic-gadget/electronic-gadget.ttf": "e24858c0b60a69c5646b1547210fff28",
"assets/packages/atlas_icons/lib/fonts/fitness-gym/fitness-gym.ttf": "4271c3a0c2c52db8714961e022c43119",
"assets/packages/atlas_icons/lib/fonts/food-beverage/food-beverage.ttf": "3bd6a218528261210afd0fecba202a31",
"assets/packages/atlas_icons/lib/fonts/furniture/furniture.ttf": "a3ec0d78085d4bd960a42ad5690c74c9",
"assets/packages/atlas_icons/lib/fonts/goals/goals.ttf": "0f4c7d9e8c7493ce5c97ed3a6900f454",
"assets/packages/atlas_icons/lib/fonts/hand-gesture/hand-gesture.ttf": "23cf587d654b727258bdd2e539cbf3ef",
"assets/packages/atlas_icons/lib/fonts/hotel-service/hotel-service.ttf": "50c923469385bd7b44dcb324fe548559",
"assets/packages/atlas_icons/lib/fonts/internet-security/internet-security.ttf": "1a54b082a574356bf84cc740303ed2a2",
"assets/packages/atlas_icons/lib/fonts/laboratory/laboratory.ttf": "2ac143285c91dfeaa7bd76b1b9531503",
"assets/packages/atlas_icons/lib/fonts/leadership/leadership.ttf": "027bd6ee2dd9c7eb2fd83ce8c3112024",
"assets/packages/atlas_icons/lib/fonts/love/love.ttf": "d1bb0864325a76ac12868703585dca7e",
"assets/packages/atlas_icons/lib/fonts/marketing/marketing.ttf": "a3c9127874bdf909d03f23340ca680e2",
"assets/packages/atlas_icons/lib/fonts/medical/medical.ttf": "1870469962656e437fe59fbdc1d41f57",
"assets/packages/atlas_icons/lib/fonts/partnership/partnership.ttf": "153e3d7bf92828c0b6f344462c96b3a1",
"assets/packages/atlas_icons/lib/fonts/personal-development/personal-development.ttf": "cc1fffe7122f1837e50149b9469cb537",
"assets/packages/atlas_icons/lib/fonts/real-estate/real-estate.ttf": "6a12f5fce5044802569cafaa0468851d",
"assets/packages/atlas_icons/lib/fonts/school/school.ttf": "df386f18a52a9184d05a34e44611fc29",
"assets/packages/atlas_icons/lib/fonts/social/social.ttf": "14e2653eb89f982208a1c844d145ec0b",
"assets/packages/atlas_icons/lib/fonts/sport/sport.ttf": "35b11c59b869732d524129e81095ee7f",
"assets/packages/atlas_icons/lib/fonts/thanksgiving/thanksgiving.ttf": "3361220d1c358b8e5b9705250af2031f",
"assets/packages/atlas_icons/lib/fonts/transportation/transportation.ttf": "7fe16a999c74f8d1d1c5b380eef01d81",
"assets/packages/atlas_icons/lib/fonts/travel/travel.ttf": "ad2106403b4f3178091e5b9b65fbc636",
"assets/packages/atlas_icons/lib/fonts/virtual-reality/virtual-reality.ttf": "4f154c6974c3ca6c64e6eabdac9aca8b",
"assets/packages/atlas_icons/lib/fonts/weather/weather.ttf": "bf22ee4acf5483d84fcd4fb215f949e7",
"assets/packages/atlas_icons/lib/fonts/web-design/web-design.ttf": "63e6ea1eeede5eb6d7d1b7e7ea5c5797",
"assets/packages/atlas_icons/lib/fonts/winter/winter.ttf": "498547350c07410d7d2b5ef388786d85",
"assets/packages/atlas_icons/lib/fonts/working-together/working-together.ttf": "0bb881a4d35082e410776be5e1207d49",
"assets/packages/atlas_icons/lib/fonts/world-monuments/world-monuments.ttf": "b4838b4465611323a6f32f6085fb6629",
"assets/packages/atlas_icons/lib/fonts/yoga/yoga.ttf": "66b3143038a6ac7a5b3f98ff41ef1002",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4a7a9e0ee1ac5ad11a32df9195d9fc5a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "c2aee98c9b9ffbc08bdb609180ffacc9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a5ca822e69370b230fb1aa2d9ceca621",
"icons/Icon-192.png": "42cfee18b9c24932763218bbec3ac950",
"icons/Icon-512.png": "782cc1263734c6c2ef7afd5488999e1f",
"icons/Icon-maskable-192.png": "352cc7c7aeb0ab43f5dcce7bbadc5e88",
"icons/Icon-maskable-512.png": "a1fd0e7eb209f28e21adf0f426f18494",
"index.html": "c3f3e7beb6200169b250e9d72d9f1af1",
"/": "c3f3e7beb6200169b250e9d72d9f1af1",
"main.dart.js": "b5a6feaaec02e8d95e5b353373ec1a62",
"manifest.json": "c77cc4dddd6a40d2d7761b45bf579dce",
"splash/img/dark-1x.png": "302d50ab8f66288b31b6ae3f1ae52a85",
"splash/img/dark-2x.png": "54f93bdc6e7b182239c00f87c07dc454",
"splash/img/dark-3x.png": "5da9db1a580528223a5e5de21ba1d810",
"splash/img/dark-4x.png": "a21a27d248e4901fe90a08aa18924ce4",
"splash/img/light-1x.png": "302d50ab8f66288b31b6ae3f1ae52a85",
"splash/img/light-2x.png": "54f93bdc6e7b182239c00f87c07dc454",
"splash/img/light-3x.png": "5da9db1a580528223a5e5de21ba1d810",
"splash/img/light-4x.png": "a21a27d248e4901fe90a08aa18924ce4",
"version.json": "b8627b4161a787f04339a1a5fdf9a1d2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
