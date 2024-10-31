'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6318725975b770cc16976255e87c81f9",
".git/config": "1a093d7b6917956293ec33dde51a3187",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2867a6327d78bc50eab37f687f263e68",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "912a1a25f3b0478e930d313b7b4f45e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00c714ec333ea6222f803179f015ae63",
".git/logs/refs/heads/main": "51512588f920fbf07e85350bbf563203",
".git/logs/refs/remotes/origin/main": "13b5ecebed838c4cad2dcf1a4520af3d",
".git/objects/02/095a5fa8cb662523408c14668021b9bdd35485": "1f1a941194b4215c42b697171a054347",
".git/objects/03/056266f8bb9d259bddcda6ad4fe5bf7aaf6316": "4f5953abf97e6ae0f7971c4404744f57",
".git/objects/03/13c141356f40f8465d60ffaeaac8d56a230a29": "b269202859824193e5df2a385f264f67",
".git/objects/05/cd19cd8cd9c1ff188af10f2503da056d2a3ddc": "d7248f2e45d985590a4a09fabf2999df",
".git/objects/0a/b8fe529158e166e5afdeb15dd182fb8d86e815": "eda19af119b14595bf4395e6b259eeec",
".git/objects/0e/307d9c4a658c6def325a11b609c25e23a8d722": "026921e946e439caf4d1d526aa20702e",
".git/objects/0e/8866ac9bb821fe892efff9cf96d819a12813ff": "658a18e024d6b57c30a42e8ce373fb50",
".git/objects/0f/f61a0b7741df1f5b33c30ff769ec4ea06d0d6e": "1ed668fbe95a032de2995650d99f7465",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/1e/3694007eb6e7d0fe1352c6db36063f28f5abff": "5b1446b30825952e39ee3798a9683406",
".git/objects/1e/52aa6b13f4a70bc3a09efec42359a0afd727a4": "af3a14f06c501f249f049e12123130d1",
".git/objects/24/fe9bafa266f21aa58abf149e87878c104d0483": "b9ae42d8f19ec6870aa2d56b812ca2bb",
".git/objects/27/1f6ae011ce6019b0b9926d171377829cab10b2": "083e51cd6352b94d164b76836f112e30",
".git/objects/27/ae3f6644879239958d1944192c8d1c860644d9": "d14eb4d32e9037337e71f906aac07f1e",
".git/objects/28/a0ed98faaa07bcd8d157c95b7cab4d8f4d3f3b": "4e1389ab480255eae4c088f664e37849",
".git/objects/2c/d4e091749ac8aca0ea2d3c289a0458c4de89ee": "2452a7ba84424f3fdd963421783b5eaf",
".git/objects/32/4f0bb1573943fcb7ae16751a7b93abf7553582": "b617d89ccc7173481d30572a4e5c44aa",
".git/objects/38/6013e107aeab2516254db6568a3165fbd611da": "062ec4318f1260050926ab084ff856df",
".git/objects/38/bc5626d29470c7e38316e102fcc445d51b0f5a": "2ffc1e390bb2f939ab1f51841a751b03",
".git/objects/3c/baedd1143d0a8b59570fe2073e13b91b29b8f0": "3565759e29465a3c99cfcfd5bbb3d465",
".git/objects/3d/150cccbbdf93ce15d6f6a82dc3e03d671633fe": "c9dd03351a4a98f518b2efa6c6bf6a2d",
".git/objects/3e/9b78287ad42ec3bb9ad05e0cb33410e579c062": "6c13085631a8a354666d3784d5c5178f",
".git/objects/3f/88a2a27502c85044a0331ef5a54b91fefc46cf": "2f69e99693d9dc33c3682d4caec87826",
".git/objects/3f/91ec5c14d3e5bc3b8e323ba893d0c083468784": "6379b31b38d1fbe4020e27a32771f656",
".git/objects/40/021652243b7ffcda7e3894f56cc3d22f9a9fc3": "bb290ab8a704379c53c172684b722206",
".git/objects/41/4ded7083d11a41836ae112939fa866ca10d90a": "d5054ebf771acb870744980b7e08f4c5",
".git/objects/44/e81907e5d73b1c89034a107895c26e7607f644": "0e4083e68348824cc4459924632182f3",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/48/6349eed4c484eae00deda1027083b4808ee509": "cfa14477a8ddd4542bce8e7d6ad5a87e",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/54/92c1ee4d75aabc1783ac65d2c49d8dc9137e8a": "5bad1d42c96926d9034f37945eac520e",
".git/objects/56/8350cddefef2334f9e219fc165af67122b3b5b": "c0fdf926348d188e0000b4ca9682ba4c",
".git/objects/57/1d2231a30f134f2defd62db10bf28a0fa877ea": "d6e5111b6c6f8de97d1ae37647f9867a",
".git/objects/58/c6ad53e04a648d51e5e0ca1a0a8f00f28f7f51": "a3baff45c0241344a718f1713b605018",
".git/objects/5c/e7dcb9d43c77081a70d0dbf41a54b138cc7c11": "8c18ebe628f1f06b4637292997c17398",
".git/objects/60/09aca8676b6b54dcc173d85b760ef8f7c1f0e2": "72111385d4cfa9b9ddba9df65b31ef30",
".git/objects/67/c59845970d63c9c9cbaad724c14cfc0c267f96": "9e29af622bef8c352c8ec82b0abcd3bc",
".git/objects/69/fb73e628bd36b1aa8c086da6db02a2ea632d3a": "7b1113754e54519ec60726e7a00a22d3",
".git/objects/6c/cc5c3dcd1e7237d5a87864645e0f72a7230807": "b01490151d6f83c7d02408aafbe13533",
".git/objects/71/e0d6d9c70aca5f3c43ce3c58ee369c0150c237": "845b86060e5fdc1b4756ad0126f92170",
".git/objects/74/0117502273d3d459b665e889bab7b193b36903": "767c479967cc5d26335eb706094487dc",
".git/objects/74/c5a6c2a962139b61c4e361f58168daca2332a6": "6c81bcb006f87f003f12f6c91eb11633",
".git/objects/77/3de8a5514a21e50e92f0c609e484f338f14745": "586d135d043fe81627c16010c9d375fb",
".git/objects/77/b2ae2cab38ddd69b6bce7c797312cc9022cac5": "7936b602d464042ffa867dcf5fa301bb",
".git/objects/7b/5ffab296544094d733b3536002d89d6c498997": "fb66f433ed91b1f6e554492d6c590175",
".git/objects/7c/750318da4477aa49b555b3a3f3f7e5c6060a2d": "3339ee1090275c2c186d61df3787eb45",
".git/objects/81/0a9ff9e8d8ba8656f7275dde1efec079c4a517": "aaae8cd577b9fe2915c43b6c8a89fbf6",
".git/objects/81/5d7f7c9593e0a6a0125105a60a05e9991e1f79": "d521ef7d941c702141937d981ddd52c6",
".git/objects/81/8b2ae80980fa08acef43374c02e60ccb1d5102": "e23388f3afc0dd1a596fab68d364b54b",
".git/objects/81/bb9cf0d5ef71927d0b01ad5e6f5c13fe089f98": "142b707b4350b2208c0d6a3689f78f26",
".git/objects/84/ce36628d9a627aa42c3e79a856e30c862eb5df": "eb362efff7937bf50d87236ec9a1e9e6",
".git/objects/86/ade6a670419fc03ec30bc166550bd39541f0ac": "563cf941ecae37850accb5e00380146b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/814e4f40b9f0abbd87304c273b0753ba5c2055": "c212709c2e04e117bc329a1df6e2b828",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/da412916a8dc167b6dcd086561f748518bc9b3": "72864268af49622ea35a8f71f1d28747",
".git/objects/8f/1f0246f3bb4ad29ae0ba55c911096dade463f7": "2ffee6120552e5ffc02b046bb422272a",
".git/objects/91/dc6cddd3bdd2f3d280689d8850587c34b44584": "f6bc4f0e47da6165344c0ea17e5daf5b",
".git/objects/92/3075e15b609b52b54bad9a6d3eab01c502705d": "b791023d5354fa863f3043e0c10773d5",
".git/objects/92/33a0d8155d8b85836a4522708ce0d2e9868b71": "402c7ceba2dafb0e0ab87af2c41923e8",
".git/objects/92/b4b5eaef878a54cc8639c5df287ff0f5e018eb": "959d59818ef30ad6c4a6b2faf0ba4274",
".git/objects/92/dfe2dd54c9c2708eb335f3a16085449a3fa55f": "f71fcc64df1643f7d3ec56e3071a1142",
".git/objects/94/1eabf85d36ad6f193d0e57c792bc589dabb2fe": "77970324acc1f07749fe1c9a70ee200b",
".git/objects/95/4efbfe34829fa8eb469a65b43d319c62844db1": "5fd79fd77e8db7b3ea03eef805399bba",
".git/objects/99/b2b336786cb86e2849d1055e3eff6b7071155e": "8be81cf22a6035bd50b1592a70d5b613",
".git/objects/9b/db044c6713eae0b4a97aa893b604659ba7f68c": "e584b76dca269fb438db4c80fcea67d9",
".git/objects/9e/9c944ecc64536b6c9d8c54ab5d2455aacca61a": "0d9ebf683a8a8ba7efa599ebf67d4e9b",
".git/objects/9f/58487f6cb16f4116619d262643e4cfb70fc344": "e24421bf8cea08ce0abef9811882eb48",
".git/objects/a1/9ccc487f433ffb095ffbd137db5810b28c7b75": "bdead86dc9e138a89ea281d6cbafb020",
".git/objects/a1/a6c8e345aca76b79d2c28d20b9d434538e83bc": "095eeb07007d76c3e6ed52953a47a854",
".git/objects/a3/13eb58e1349e92482858a135f58249a47a2c3b": "cf1446996236c93983b53625c2b9e7bf",
".git/objects/a3/1d267db91957e0978df532609af5b44ab40c3b": "5e3e88a6419827785cc8846723dd2051",
".git/objects/a3/82af69ce90665cce6bf60455b66f8a2a4520d3": "a8c120812e895c552cbabebcc1d14af5",
".git/objects/a4/55b7295d5c63e00244d3853405efbe9c89415b": "143131d90be95a3030ae29f7af368f6f",
".git/objects/a4/7c4fc68e5e9fa7623b5767430a9f482ce487d6": "ae4831c1d976df711ded14e938ac16ef",
".git/objects/ab/60c394e8649503f38904c26331135e1daf1e54": "ed34d9f4cd8d1d5c52d1806726a6956e",
".git/objects/ac/ab5128a6776a4c28d7c5aea6d184565d46e606": "bbab26be6b90fe6756689ad324953b3e",
".git/objects/ad/14193c7703b4fab29c4b9d8d7a9aa397d091e2": "d6cea128428f1665d43d4a161e44de77",
".git/objects/ae/0da9856b16b4c1b09dc56c3abb883b0397e9e2": "f78934183935a65b891e06a077657aa2",
".git/objects/af/12fd23cd374b1d83d428f49cb1f029de6783ec": "ac78444eb356703b606932218b6729a4",
".git/objects/af/15e9ca682b95f37947fd3c67a6b1ccb41a3fc9": "c06a9f21e571919b1d479a19ec6dc153",
".git/objects/b0/74adbcb601e8e7d23786ab8cb02b28cb9f2cab": "413d95fa396716f213e5dbba6b79a31c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/ea482c13b90f48eb9716220a0d5facba12be16": "54279c58582bbb40747362b1e575769e",
".git/objects/b4/4cfb7bc1a2e6f45992f721378725aab2ebff7e": "8aeb5b7478cb954e4931348121c032dd",
".git/objects/b6/835af72ac2c95bb30797ae63c74d6125d207d2": "103ba0e58fc21b3b672e3fc5b921b687",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c9c668c6ae308c984876ddc5472aae53a8acc": "16735cf53d50efa87ec6b1185b9ab8d2",
".git/objects/ba/77c72ec69ee5e114c6cfee2d390e2cf245d332": "80fa6e8eff14451d82f1f4105a988e29",
".git/objects/bd/9f5b3824d7afb08540dc72dda15a5c6bd74cc4": "a8380b0b3bc06da527a2c2fcfbe02dbc",
".git/objects/bf/36c3bd1553a03056c64c58facc8c4f4f08f258": "df20d34460502b16d3ca1260b790cf01",
".git/objects/c2/0cacda56e7ecb0afbb08a8b1649f4337e98102": "f9894a4155608a718acd8c944ab0b45c",
".git/objects/c2/d7bc47ebbef97b693d7c5c2b40c9af85866ae0": "088e0b98f00415398bbb57bf34b1c04c",
".git/objects/c9/558de2b98632645a75d6b9b4eb8030f22f9384": "a3c1e5fecc0ef742aa4f034f3a23992a",
".git/objects/cb/675289d9cd48fe26d16977429fc8267678a276": "80a37ae0a20d3524a5b8d611228798b0",
".git/objects/cd/b50a12080df501f3879e6c74fa9904afc49162": "afdc601cf150a2cb7d3f4ca78fca9fc3",
".git/objects/d2/7f093fb8f06f6117866ed52e8f580b3006b8c9": "8732d52a8ad83e701fb9bf2583e94943",
".git/objects/d2/8629b72e64f50bc082698132976c17974e62a3": "5697e3946a5991b9694ba868d40adc20",
".git/objects/d3/e35a10ace11225b41a18b16e27def634abcb46": "a87f398f3f5761990b7cee4a0f274822",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/3b5b05ea7a9002df85382f93c20e0e0744959a": "6cce38136dca35bc038da4891cc217b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/846101b7c2e2079baf652f81e17f3187ee828b": "7a7bfd54fc9d47d47ba72ec2a89c9f38",
".git/objects/d8/20cbbdfd2b1500b3684a4e5fdd052de64729ac": "7fe697e6955c8fae0f051677b096e759",
".git/objects/d8/4e8699dc2fd291176eb9aadcce2e617c1a5798": "c9633ab112c2ecd604b085f95fff05eb",
".git/objects/d9/05a865f77779e73ccfb33ca41327fe7504ef93": "42dda746c0bb2ea9310aa34b705dad32",
".git/objects/da/1f27de17425adc0f16aacc6f919639aa6f1f98": "244270eeed801f066ce12989fdb20076",
".git/objects/db/fca6c96237ddea5b9ecc18940bdfa5b1d6268f": "166cbbd73fdf84d016d5f1396ee0b16d",
".git/objects/dc/ced7695838cbe37e99fcd233c4c1c419ba1ee9": "11aa6a3a5f1a8d4c2225564d10860b9d",
".git/objects/e1/3a020687527020a2e87ebd8206d20578f91e51": "75811f4d9551b3c060b7d238032829bf",
".git/objects/e6/79a00cb43cc1a3e85ccd73f12ab64222b7b21f": "c34d7f7746d2ed078c88a64041bf317c",
".git/objects/e8/9ac54d60a131b4d71e7b3bc741bb3dddcf15cf": "5c842e879607f9dc47b907c8926fe450",
".git/objects/ea/c3436a8d26bb542fea27c1d7bd6fe8a8082da1": "20c2915622077416f9a5c28a7742491e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1313af953cb9f90fc8426ec7418806f5c3ee0a": "44061efaa939b9f824f3508e91dd456a",
".git/objects/ec/48a4df37d89c1c28bb054dd52dddf787fca0e4": "bc3e4f5bad81f4c602d0f4587cce11a9",
".git/objects/ee/97537ab8c98522a17049a5865584fbe2643f45": "ee3e7ca12e2a9568c827ada03e9bca64",
".git/objects/f0/5306eeac4ca6a161f8fdea42949d4021965384": "a4cbdd0f287550031d1ec756483dfb45",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f3/8ebf0ceb8bc6b4c3b51f61088e1f05a8505a16": "d09f06650a516f0a5f4750674be04ec3",
".git/objects/f5/51476bbaa25968b2013297942e2bddc3debc99": "a083cc0c6fff1d34b9ed57c79f7e97b0",
".git/objects/f8/6f1ae547429610eb9bf3c4b2d8d3414f7a765c": "a1dcc9e548b96496d121015895711dcb",
".git/objects/fe/77aa9c2e4e13058bcf93a4cc3ab98277c9adf4": "598bd7509f468831b6ce37d257e3c5f5",
".git/ORIG_HEAD": "17ad7e6353c9f1d98435c3b7bff20a0a",
".git/refs/heads/main": "b6a3731438c076279ff9ac15c03633fc",
".git/refs/remotes/origin/main": "b6a3731438c076279ff9ac15c03633fc",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "268bce500ffe2433930d46ceb0240f03",
"assets/AssetManifest.bin.json": "bd814d09d559b80a8a08ff599e71d4a5",
"assets/AssetManifest.json": "504f836ad3694956a0e6222a30e174d6",
"assets/assets/fonts/Inkfree.ttf": "73428cd1ad823d01d77b642ee6104415",
"assets/assets/images/Adobe_Premiere_Pro_CC_icon.svg.png": "f0d4dfabd699a926ac34f4bafd0aef46",
"assets/assets/images/color_logo_0.png": "3fe744726e43f4137c74f71c33c811e0",
"assets/assets/images/color_logo_1.png": "53f7c1f969f0e9bfa39bdcfeddb16d36",
"assets/assets/images/color_logo_10.png": "f056304776a4a5442322de5e18a9a407",
"assets/assets/images/color_logo_11.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/images/color_logo_12.png": "3d92c497e32bc70b96c704478a2788ca",
"assets/assets/images/color_logo_13.png": "27bf30621fff8ca85275d1998bfb98ae",
"assets/assets/images/color_logo_14.png": "6b398beb35c8a4468b44e733b0b918fb",
"assets/assets/images/color_logo_15.png": "441104121f45696d5db055686ef3f6f3",
"assets/assets/images/color_logo_16.png": "7685f5dcf61713d0c26b46370c8fc70f",
"assets/assets/images/color_logo_17.png": "47e155d0029048df1d9d4b87c431f1b9",
"assets/assets/images/color_logo_18.png": "b3af3f41f15b89644569a89d6cb76ed6",
"assets/assets/images/color_logo_19.png": "1d786e39559355e21315bc694ad5764f",
"assets/assets/images/color_logo_2.png": "38856c692e03024326bba5f3b98e997b",
"assets/assets/images/color_logo_20.png": "74a35828476fe17c2d295fb3cafee3ec",
"assets/assets/images/color_logo_21.png": "755987af378b20170bbebd90852e4c70",
"assets/assets/images/color_logo_22.png": "2aee183254fa636391dfa69773fae0ee",
"assets/assets/images/color_logo_23.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/color_logo_24.png": "e512be08eb7ae5f20fcc75b383054d11",
"assets/assets/images/color_logo_25.png": "1e396e9c6b41ca3f84dc66904c8504c7",
"assets/assets/images/color_logo_26.png": "6bffc2fa02f411df6d9bc9902185e28a",
"assets/assets/images/color_logo_27.png": "f48c9dce5cc45aa21b996f4692eceddb",
"assets/assets/images/color_logo_3.png": "cce5d30281a53321ff772e28ff61bef9",
"assets/assets/images/color_logo_4.png": "a55c51223f4a04e8beab075309fdc280",
"assets/assets/images/color_logo_5.png": "70d28c5a7c5f888db5a1a50b268fd9ce",
"assets/assets/images/color_logo_6.png": "f37f83fa70eeb936a5992c4c89b58d39",
"assets/assets/images/color_logo_7.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/color_logo_8.png": "25dbcf9f4fb4f7fd19144ea2bdcedb88",
"assets/assets/images/color_logo_9.png": "33684c7b78cda97bad2bb0bc9e11387e",
"assets/assets/images/develop.jpg": "7a1929114a443d338aa9f09d2587ed8a",
"assets/assets/images/Docker_(container_engine)_logo_(cropped).png": "968b730ff9e83d93723fcdd3fc01df3c",
"assets/assets/images/Facebook.png": "e4da23704f27c9df07e6c21a13e28bfd",
"assets/assets/images/fe973ef75e14e96c5fc5cdf4fcdc0ef4.jpg": "573c86c52b4e13b9b4404656780536b3",
"assets/assets/images/google-developers-logo-F8BF3155AC-seeklogo.com.png": "3101a71635f20934bd7b56e6bd5648ca",
"assets/assets/images/graphic.jpg": "32fec4a9670519427ad54ab9c27cb17e",
"assets/assets/images/instagram.png": "8c91a3aad1c8932e674f902106e35685",
"assets/assets/images/logo_0.png": "16b0f88bcd8aae04bbfa28a34cc00331",
"assets/assets/images/logo_1.png": "f79e827993bea82ba00edf7e436a78f4",
"assets/assets/images/logo_12.png": "f495e3c7940da36cd7ba1b41fdc87ed3",
"assets/assets/images/logo_13.png": "c4467a15fd613926085d7d07b2cc3207",
"assets/assets/images/logo_14.png": "e28ffc38c97f927ed3a81f0aa43c5479",
"assets/assets/images/logo_2.png": "aa1cd411792d5dfe758f8d7b70b921d8",
"assets/assets/images/logo_3.png": "0d572612bae9f7207225c009d10b27c6",
"assets/assets/images/logo_4.png": "070d48c99526a51aadc904a313792a36",
"assets/assets/images/logo_5.png": "ffaba02788bd1aeb3185611a9bacf185",
"assets/assets/images/logo_6.png": "7ae727a0a79dc3806e67d88c7b89eb28",
"assets/assets/images/Lucid.png": "55176287498ad5fc8de828373dd1d004",
"assets/assets/images/pic.png": "26a295af5490d1b9a6b558a0af3d800a",
"assets/assets/images/postman-logo-0087CA0D15-seeklogo.com.png": "82a0d0900cb1a2801b2a0f5988991baf",
"assets/assets/images/profilepic.png": "e739da87373959f262d3f69a796b2210",
"assets/assets/images/Screenshot_20241010-232036.png": "5f557a479cc8d409d37f8a33061664ad",
"assets/assets/images/SIPMonLogo_icon.png": "67dfe03f15c645f8d524a5d168cb60bb",
"assets/assets/images/social_media.png": "e39d38ddc0d7c52db03a5d1b325ae6c9",
"assets/assets/images/tiktok.png": "35be362428d52fd45c2351ca82c7401b",
"assets/assets/images/work_01.jpg": "4cd8c796306988a68cc01c200153ec4a",
"assets/assets/images/work_010.jpg": "f8f778883cf696732423628dd865512a",
"assets/assets/images/work_011.jpg": "84313bc3bc40cbf8c46efdb5d16315f2",
"assets/assets/images/work_012.jpg": "9f2ba706529adb96576dbc402cc7e11f",
"assets/assets/images/work_013.jpg": "e4453fafe157761c1c71c22e451fae6d",
"assets/assets/images/work_014.jpg": "41f9cc2a39254b244bb224b767eb79fb",
"assets/assets/images/work_015.jpg": "0d37fd697c3b9810fa6876087af3bef3",
"assets/assets/images/work_016.jpg": "d3bf750a4532347bca09f7f228fd6cc2",
"assets/assets/images/work_017.jpg": "a88779324b2992de8a445bf907dfe70c",
"assets/assets/images/work_018.jpg": "b70df2f14bbc76f5ffdb2c9327527f22",
"assets/assets/images/work_019.jpg": "0f57676c229a76d152b986b386fe78d1",
"assets/assets/images/work_02.jpg": "5c6fd0b3a2140c555252724e406aac7c",
"assets/assets/images/work_020.jpg": "576bd424f19f2bb855697bfd3c68b837",
"assets/assets/images/work_021.jpg": "b6208ac48a1c9fc91c9e9ade27e213a3",
"assets/assets/images/work_03.jpg": "5ce3b743309d21db98668b5393bbbd56",
"assets/assets/images/work_04.jpg": "587f43c1bac3417a2657475d3e3fdb29",
"assets/assets/images/work_05.jpg": "52847914980752fe7e20710f413171ac",
"assets/assets/images/work_06.jpg": "ce372165677eadd8b9ff651985a7a344",
"assets/assets/images/work_07.jpg": "01b9573568bce7a776ccd75824fda0d8",
"assets/assets/images/work_08.jpg": "768904b07ba601a5e13fe25b3b3c5687",
"assets/assets/images/work_09.jpg": "7cad3e062f29099bd9bf065dda746e18",
"assets/FontManifest.json": "2a66a7ab52f6dad430f8332e0f09fcea",
"assets/fonts/MaterialIcons-Regular.otf": "3c5e36ae3fefd2f367da3e9b3c039d7e",
"assets/NOTICES": "ffd9dafb6b2d4a4e8a21e95abe14dc34",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d84e7832d391997795d3089b8cc12cbb",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "73a7936ee5913f6d5364c2317a51e5c7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d11625e6f417e3a9d8130e9cf2445779",
"/": "d11625e6f417e3a9d8130e9cf2445779",
"main.dart.js": "5354532486b576d6d70d9b24005be38b",
"manifest.json": "bb585d708a15eaee2df0ca5f4837e591",
"version.json": "6fc41ce1e807b71e086105e9c673cc64"};
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
