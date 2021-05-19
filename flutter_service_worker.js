'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e518ca4155913f73febb6341ec07cc72",
".git/config": "91daa93fb891ea49b78121bfcbfaaeee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a02a1b96fc5ab9f82a47d7903a05b268",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "0425bb2d8dc65fee3e40043c50d24e27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac28f2df7d645e9d4fd0e28f06484b15",
".git/logs/refs/heads/master": "ac28f2df7d645e9d4fd0e28f06484b15",
".git/logs/refs/remotes/origin/master": "e882ec9be351b0cd4c6b233ae2f41952",
".git/MERGE_HEAD": "2faaf086e08c4fa32c5ed3209bee89ce",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "a7a55407d1064e701d48fd69d314ae4d",
".git/objects/02/12267641d81f80f81957c2b74bed6954cdd286": "68ec82b87c13bfcf11dc7d1211e6bc03",
".git/objects/02/9badea2653a99fa2bd4387c11012b30690e6ea": "d7303f68595e6abbf8ab3c1936316e32",
".git/objects/03/6f0a78ec23cc111a647b1969e4ba76e39234c6": "b4d55b5a4d23240323c29727c4af47f5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/e1d036735fb1d189db1439bf9b2508508f3b14": "f2a220ec4abcdac08f67825ebbc95157",
".git/objects/05/ffc38cb8d2d22b3f0fdbcede27fe81f1e6faa6": "964f41605eb45bf43cab16bd2799616f",
".git/objects/07/43987a4c48e4805ff4bf173b756eca3f11b047": "c2ee846591f93019cfbe352c6f5d1a52",
".git/objects/0a/8f7e05d0d54bcba33161545a6b79cba3edd49d": "c581afdbcb073aeaa233356876cccfdd",
".git/objects/0a/e0d42f34a96442a162fefb4a4db2be044430de": "7479ed8d3d95cfd790705d3e1ae65d51",
".git/objects/0e/86c77755e8a7865236cdbc8c7371fa89b44dbe": "7fb9395a5b3f40967f871cf7a34c3b6a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/f55834b685043d3985b6b6fe16f4654ca8ecc2": "0b475e823dd555ae1236a5b3f2fd63c1",
".git/objects/12/9401fbcdd44156cc3f27ba079677078f5fca17": "569248008039840a2207c1375173c6c7",
".git/objects/13/e2a4a4d901462b5523eddba62ce4f70673e1d8": "664fe1b94dcc6d94bc71ca0d105de963",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/0a0a3b5d1920824d166d893978dd4738dafb8c": "bf2e9a56c1852260860b167fa3e6fc02",
".git/objects/1a/5f7ef7b2ec2b5d73506be32f3ebb6f2efc6647": "25742d8adc3905c58003c331aed3916e",
".git/objects/1a/8037e04c775b0d2d0badbbb5f0c21c62442414": "9c329e07dd1a140722394d028fc38b70",
".git/objects/1b/cdfafe6ef5367afd0f75ea3a2c272eab46c9a4": "92b85eea5ac738ef04be16f52e69feeb",
".git/objects/1c/e5d1e60514b02135b5bb1204efca1602625071": "841b4320dde719af058c7801e9f349a7",
".git/objects/1e/098b88589a8629ea48be42877967dd15d5088b": "f8c3080df29b4fd999c8b3b7e267ac8c",
".git/objects/1f/c884d6497a7e32803fb017b3d22c87abf6a345": "5c54034db9e1e487d02384c794963f50",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/a9a44fd226efc4f98961ff308134cd60eba336": "13344a98ddddf2c486a9255d4b3d2105",
".git/objects/23/a9f96c44ffbe92f41260ca80842e4d0c80c387": "9280cecde025e5ff1facd89f877e4b63",
".git/objects/25/4324cec906f5b0b1b2ca07350f488724e189bc": "5b9d758dd8f01188f6576ddd27888da3",
".git/objects/27/4e824b0ebbcebde97fbdf72753455545351a29": "2ba5b841c9189a24fe0923717821c8d5",
".git/objects/27/fedd88b06e0e654c269daf10d892d5f72b0dbd": "9f9694dbd35921c407239fd85683b4fd",
".git/objects/28/af04a7862d4fa4d9fdc3269ad25d3d3caa50e0": "4cffce4b5e904bcec19337a802291c45",
".git/objects/28/c6ba58e2dac4a90f3cd0355c8bb3baf91ad05b": "0d94dfaece354b9bd27b1378e510bdba",
".git/objects/28/d41d59ef6a2ce0a6bf85b7346b00e3f241603a": "b59606be711b3bb9e28d686d960d09b3",
".git/objects/2a/53ff0a210a9ab464eebb94229f0827af8e77d3": "141b13dce40ee838e4353a321f82482d",
".git/objects/2c/f92134202c5bff4ff724294acc00a56b9c2374": "6f2f7c99b695e8e684133003f7c75ec3",
".git/objects/2d/fb30395ba4f983e5108e8824d2c07e4274cf08": "f911033ec470d11085daf6b1a93d0743",
".git/objects/2f/73050307189fa985af10a0440d6ee221e17eb5": "372ca6152cb55fd4f942d9535e319fe1",
".git/objects/30/6694921019646f60df329a8d33e17243821e1d": "b61b619c982cb71cf0c91454a5b37716",
".git/objects/32/5fbe2f110eb68392461275f00737f01a6af0bb": "bc0453e5c403347ce86d8877e69f7917",
".git/objects/33/0cb6a6716fdccad6ad938865fdec167e8f46c2": "a2430bc08050e02b4f2399c532496e0c",
".git/objects/33/ffa1043edf800e3d6de18dbc6e5289c93d6b03": "78bda03cdfa541c4b59372baa2e30468",
".git/objects/36/a353c3a2101838fc5f654d319115569d41e17d": "fb3e28db2970123e154801203e94b1aa",
".git/objects/38/9fa67aed172fd3ab26d34b8e04443c7a389ad5": "ab66aa842b786e5f97ff102b40706f8b",
".git/objects/3a/9dadc284428b98d4425828f8c75bbcf3e2e1c3": "26b606794d733a66ffe7ed8318dd23b3",
".git/objects/3b/d262511d360ced4df95c36be7944b09bc44ca0": "00cbc229a408de61dc62271d13c6076a",
".git/objects/3b/e57fbc6b75c0dd2432c9ddbcf2273d542a5d91": "e4d5527ffbe2815de05b19825ce73e6c",
".git/objects/3c/c4f193f9bbffa4488dd246e37f1c14b90ab736": "aeba4187cbbb78cfac1a25c9f1b4533c",
".git/objects/3c/eb0c7eaf2f7c3f46e28f8df98ec6c458915cbe": "7a5ef7880eca734c896b39a80388e397",
".git/objects/3d/e2426f8f2e4dda3ebda195a07834ac9bdb9ecf": "7cbb64371f898123b6bcbfb9b071a8aa",
".git/objects/3e/ca9b18dfe4f00b5148869e72341cec551db56e": "e0aff007f2790d2db38bfff442d90218",
".git/objects/3e/e7da59deebe86082088b91827b913de411882b": "5914323f8507f4d42fd20d1d2578976d",
".git/objects/3f/8a625e8bc254b14ca25c3902406af007bf370f": "d0056db44b7f3ff86ff1e4ddaa119f81",
".git/objects/40/d92b78e9605ee5779e27fa38b9f45672351704": "6025a95ef896fcf91f84de24ef7bb05d",
".git/objects/41/04aa422cb4e98c125b7932faebf135afe74939": "2621b9a1a1b3e47450e448366222ea71",
".git/objects/42/b27808040335ec79a7800702a2b76e54a5bd21": "1bb98a42bf0441cc6e62c9262c7801a9",
".git/objects/45/714cfdbed8b7558eb4d9bfb00f76f5d1f4c4cb": "942705fd1ced06423a9ebade3c4d7689",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/26d93787792b56994c24070044d8bbc86a445f": "e6e3e9752405773957584c80ad8842c3",
".git/objects/48/5c9169c3b34e9980529d8e86f61acae833389a": "d2a3c555ce2a908726a7277f680d19cb",
".git/objects/49/3750c4a07cd485bb257ead40271ea4bcb8ea03": "f9ef77c55bf6dcbfd0f8a0a2b4f90a7a",
".git/objects/4b/3e751aa03d512f3d136aee56b3f21fa669b4a3": "70abf2bebf21fb87d0f6f33a3a9fad64",
".git/objects/4b/e3be6cc05110d0b2f6d786bbc3d0b728b74878": "6f5316b2ddad857cf91ec977c82b3882",
".git/objects/4d/03515e77d9a78024843e27a64b8b228fd1e6ca": "2987c797def16b0cfbf06dfae1ba60eb",
".git/objects/4e/bf52ebefce8605485198fcb452f9ca963ea87c": "fa4204b16aed45d374b02ede8116fcf9",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/54/6f241ee9186ba382b7819f3befe3ac95f107ef": "f8e28032c6e74c8b262d6158a5bfeafa",
".git/objects/54/c93955ff2a9cf6c7c515dba89470de1a4e758c": "f5a98c5816a750eedeeeb59c390be75c",
".git/objects/58/31b41ffcbc6b0096a8a23be125eb8d95d1946b": "4ec74c78b8576a2f60f618ad6de60fe5",
".git/objects/5c/1650304e9b439038fbe8a7e8b1d4f5a89a8971": "0bf3b27e4008621ad609ee86dfe3fcd5",
".git/objects/62/7221c307b78a61c1fea376451a0380ca57ccbc": "8a748f405e5547d8f8bc6aab817c4e21",
".git/objects/66/cbe491841e1502438adaa70fcbf81ce1779bda": "b9fcfa4ec6b55386227ec83d1a6600db",
".git/objects/68/a404dc7ef5a2659148e42d882a781434104660": "048487026ac20162d6023729363c1155",
".git/objects/68/cbe2696e73ea6701009509721eb404d7498199": "8e17449a2a55a759c9da6021f6789ef0",
".git/objects/68/f808e65e56a2f7f663cbd0b0336da344a6bc3b": "bf177806424509a2ee3de301ef215001",
".git/objects/69/c6096dffcb10d910b3cef40367dde6ddf4bc43": "dbb133d989112a7aafa401e43fa679ac",
".git/objects/6c/b87d3787a05fa68ced9ca6bc63278a7d8a0b02": "36108ca9e4476e38bbd5ddfb47c630d5",
".git/objects/6f/1fad69aa2f7309f27d41b99f9cda2a7a929081": "b5ccc37b4239c8f3c0b209e87b5537c3",
".git/objects/6f/3144079f734a08c2bad255d0f30811cbd508ad": "c5d968997caec09a98f24d6f840e2089",
".git/objects/6f/4b859bd516143b982d4993e63b419cb6fe6be0": "296a50444c18e0316e481c57728a8951",
".git/objects/71/adf5ba76a349c289e8cb07d582816322790d94": "0053a1554c238015ac285db1712aa9fd",
".git/objects/75/9fce093ceac17f3d1885addff63168a94baf37": "b0259e2f87c7b42386f4a384fc2de52b",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/77/413d860260089bc6236c9ddf3cb2dad1aae4f2": "8987c7204873d6ec462acbf15cbb7baa",
".git/objects/77/a5b7a03c11cd636e3be501ad8934df092f2def": "027e34310479877ae12c13431ccf7b5b",
".git/objects/78/64c6ae18a7c3064a2ee11bc1d237d4552fa1d1": "c688e5640c08ac2e47409deed6f1f50a",
".git/objects/79/a96e14805efc7b9aa85d49d700a648e88d35f8": "ae0dde1c155b6a87ab726d29d69e70c4",
".git/objects/7a/fc31c5b808cc03870ad63cce7ac01f749d9fcd": "fc62a7c2fa9e2a1832652a8120f8d7c2",
".git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
".git/objects/7c/e29f22d3f5f5db8f0b09916e2aff76da125971": "096247d5ecaa67ec660568c1845f1bb6",
".git/objects/7f/14b16bd1f522c8fa478acf0504e5979cc138f0": "44c318e79570798626b4b4e4aae9a948",
".git/objects/80/4a0e8bb934510301c818ba1291209bfbd550bc": "25660c8325d42ec9601ac3dfdd3e9384",
".git/objects/80/d0c84a08047c5f38a51fa5e3716e581e1b0c1c": "4b2a8815fc685a94e0aea1966746a6c3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/23e97c309b9ce552a3e7109c56b45adddd2c92": "f5bba91c149ecea84fc66ebe78fa3c4c",
".git/objects/81/2d19a0691de43ef00df2129bb95da4a30a8d33": "7dac6b1d9fa4468fbf44634f12947580",
".git/objects/81/79557d0d603e68a5e1355c2fd5327272cd6961": "95f9b65283794d935661cb091daa139e",
".git/objects/81/91f4580ae58e0968d72ced08e487735f161ba2": "76ba2cb02a77edd3f89871cd9f216e8a",
".git/objects/82/3dd602e2efeb9654d05eef8a884379a95cc3c2": "225de21b4003c89151a9025f96efd43b",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/78c18351cb298d30b4c59b1177846040bff0a1": "de3a82f0206438314e147f38de9630f9",
".git/objects/86/7f374b333020e3c90a0bb36abe65dcb4b8cbae": "d9c38fd03c8feed08da6901f68af700f",
".git/objects/86/da5c99b0086750a061c194fd841b9afac0689d": "eb803039aebfd8ef6128d56cb3152b13",
".git/objects/87/eec07dfb19935d06fb26109dad64bade9b9f5b": "1c0faa9bcae4620c98a991fdc4d1e00d",
".git/objects/88/6bb8cc5978f64a3e0dd71d0f9a3c2c321f661d": "bfd13808945cf8be410d23f3637b17b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f8e30f4335390f700b17a60f8bb26634c475a8": "4535d5828df161855b3c2fababd98306",
".git/objects/8a/481271c370bbde32887b9c4304dc077d65e6dc": "6ccd21086168fecd07e854e10ef0e708",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/10b27b00603921151847be13ac497ab33f15a6": "6b32ba4b7edfd9ca7305971cbcbae793",
".git/objects/8d/735f810a853f6da83992023dbe5281b8ca2c59": "1119014caead3ece9c86868cfc215f46",
".git/objects/8e/d53ad1e9b725736844ab8e80b63a910519f00f": "271cc7555f076fff6ecb384e92c93e65",
".git/objects/8f/a8ac40d21d2e9acf067ca6c5dcacdc7836224f": "0098402e46c976f94adc92c268543ccc",
".git/objects/8f/b6228f81defd6d45a772f42fa5f113e58e16c7": "0c2d5a649b6294788c251f87341a59f1",
".git/objects/8f/cc833e20dafeb7dd851bc92dc8c2a702bca9c7": "0633171bff3564c4855783cde126e8e6",
".git/objects/90/1e7c98b6e3f5be74070b54b9e94575aebbeebd": "6f577c054b61c41c5f7907dbbec8eeec",
".git/objects/90/6b0e9557c07c16077aa43215ca660938bce36d": "eb77278b457b10a9f0a49bc9af2c5721",
".git/objects/91/5b665d1a07c72329d9310c6fc5c6d3fef39c7b": "f5051f8d1f70a397c2073a1474b7faa9",
".git/objects/91/84c5566e79909f5b79008bc8ba2456498358d1": "cd87777f6f4188f874e221158cf8a1fb",
".git/objects/93/3e154d1d5c76e779b85cb5db46790a651535e0": "94f4f4cf4c4c9708e36fdb2ca337f3f2",
".git/objects/93/91ed502eb1e0d5faeed862954bfced31748ca6": "d6970cf94443b944f129c6851ecbc057",
".git/objects/93/febd7317b1c177ec7a133561ec3901c46494fc": "752b17448e6626d5cafffabd1e8361a4",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/833f2da813ce142e4d724f07cf8fb2c0044189": "c097a14b431059d7352d36246911852f",
".git/objects/98/d008ecbdb79434edbe3792bbf31a33d01b1134": "2d95583aaf466b71213e4af8ca3acd1c",
".git/objects/9a/143d7af077bbe371532ee9d2c061a2135f7113": "b53513c31a67ea5e6181a9f091e1273d",
".git/objects/a0/b888b1c2300724b39c095697eb243d54b139dc": "8b5d8e42f316208af7b0428509bb99c2",
".git/objects/a1/33322bb5f1d3db63d5648d1207e7f4f3faa5fb": "edfbf3d33c5ebf2b53633762983ccd63",
".git/objects/a1/4fb26c086059e21873136f47a5cd035719fdce": "2c4890b15a53034045712ba9639bd258",
".git/objects/a2/904271856191fabadd4d6459f1fa84d3c47bd1": "dd3cf96f343476863df8f69b804752d3",
".git/objects/a2/b3c3fbc5a7f94d2b09e10692975a9d60df371a": "87341f26af063263db63d21d2df8c7f7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/becff770b6d829d1e5f9ad27b3464b447f03c2": "dca801aef35df01b2ae0562808e787a8",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/4be6caf4a5c1a49762a998107e00e2f6e95417": "02728888fbdbf995dab4b172c1f5dd4f",
".git/objects/ad/6d71de9f2d5cd62a93eb5a388c85154f76fcc3": "f004bb9badee40ebf646e16fe1ef636a",
".git/objects/ae/67b3db0cf4ecb489542659bc4880b7bd1b54f2": "37bb6f725aee53d00c29ef863b5dc24a",
".git/objects/ae/f5d6c2138c844f76a9a27e859fa703f99f4198": "f2bad0967e27fab58e6a15408ca95aac",
".git/objects/b1/0355bf4cecde40b4afaac6a2b5d1c37938f06e": "ed7bcae20b07f9294fb262934569ffcb",
".git/objects/b1/5a798fd41333d74fe931af3eb25fb561645356": "6f96d02c8977c6390897740213559376",
".git/objects/b5/d84f36a6cd8eb8876300d423a9ae50de7bb0b3": "84fa3e9cfb6bb45405d3c810ac6db3e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/700cc4b0c23b014f52d4cb33991914ee9191d5": "5cb9af0f96bc624a1f8c06a67476175b",
".git/objects/b9/01d2a79ee63070efb4d28bf95d8efe98b47d0e": "b52bd1028ff3626f1055f1a4e6f3517e",
".git/objects/bc/55c2713ebd0d5b5e3a143825f4d5e25d3f54e1": "24edbccefd163603b7c404e1a733cc71",
".git/objects/bc/d34f90bde150184c1f3eec830cbeb7b99d859a": "f197ffab7fedb2b57dc536d46cabf2dc",
".git/objects/bc/eb3640bb96f8b79fc51747cea3ed86c6730bec": "5036b61d11baf002e5e28013a88f3167",
".git/objects/bd/c412b4c2e3cd0fbe666ea0e192b41ca9a4b547": "4079f2902f161cdc07ee984ba11f6830",
".git/objects/be/8034129ae9e16d3990385b93daa6d139e9c4f1": "73d4f0178934b1bed6b492c1bd784275",
".git/objects/bf/f71a3a9bacdff55a9de33769df91c767d0469e": "643e57ba11b12d1951b177dbdc29b0fc",
".git/objects/c0/959608699deafc407a03185787ed23757af11d": "9ea34dd330c1b6b20c915064346f8b6b",
".git/objects/c6/87f51e4f8fcbaa2ee3d79183002b8f4ad99be9": "a25937809b212e1037983b926f9f1b2e",
".git/objects/c9/242720dd8d368d610d9d744e045125abd61bce": "ed50e4e3362c2cd412f96f1cff466ba1",
".git/objects/c9/97c64816ff31741a4ebff9cfb2be6453e17c5c": "88c9898f2a5d78a1a93229d1de26fc49",
".git/objects/ca/90b28e9ce5837cb4ed3d23fd32adbe0dc93696": "73440ebc783b6a088bb9297531c271e3",
".git/objects/ca/cf8e47f63f5a98f93cee6942926b42b609f16e": "217a7158090298143dff4fd7a33144dc",
".git/objects/cb/99b56c1baa3f07a871d280abc02667a5051e74": "b65cce4a74e80218347bf71642148845",
".git/objects/ce/7d5cfaec4b5fc238ea63f8bf0cf1d6427b3514": "88c3c7e549d4fd28b787477fd0d0590d",
".git/objects/ce/c6eedeb7701df64661c08a37be806620cf1171": "6d6c2bf7a05a297a288169adf59539db",
".git/objects/cf/0281863268bfe77b97fdb4a01e465ab6b6f241": "86419261d2a557f9d201e3b4135be3e6",
".git/objects/cf/ddc78acaf29445672a94c4a6d3f87d1c8f2ffc": "a3844b465b933a67acebd9a59abce322",
".git/objects/d0/a428f61d36f097b138a5faece6f85af12a7851": "81ae30fb586793ce4c67fb26d529151c",
".git/objects/d0/f9f7e9ec58876f5893aa82496bc3afbd54dfdc": "9848c05a47842a32b05a759538e29f24",
".git/objects/d3/badce15a71a6c085cbe573fb619ef856c65091": "75971e0d750fb132ce7de2188fce14f1",
".git/objects/d4/522c3adc9b3cf950eaa4d62066c377d0a4a010": "14486015d625787e337eaa78569968a9",
".git/objects/d4/dbf129fd7fe58bd02dd62ee7e13db1d4e196dd": "1ffcf66a66935ba207df6aae1efb1087",
".git/objects/d6/a5e30d5883efcbc61ab071085bf7889e764bf9": "d0414294982515f7937238d3aaa9a288",
".git/objects/d8/165ec21593d7299e2567a3cbd91bffb762d7bb": "05a0af17ba2b265472f07fa81fe6098c",
".git/objects/dd/18c6987811199d2c5625b7ce69eb86795c4ad8": "c110c1d52de6f00a430f9d484fb3151e",
".git/objects/dd/81f1fda58252bc5101dd250e832207ff490930": "916a8ef7abef78bb9c5602e3bbcbcfa8",
".git/objects/de/a4df3c665ff551c223ec758c948cbf689038d4": "d481d48bf39576024b79ec88e9d46772",
".git/objects/e4/9022d3c9d5599c71719d1a0d6e799abcad7858": "1c191403e88dbc5f8e36f86f7fadafed",
".git/objects/e5/b0bc18d0b551ba7fe1e94bc2abf46f9f2feacf": "7afdb82186fc4b4caa18817897b07bca",
".git/objects/e7/d3a1ff81f228a97f9f0de33c8c0ff18cbb2170": "3a6d629b8712c51011cb2b5d824ab43f",
".git/objects/ea/5ed6f2ed89f49c48751a9e3411a68b25540366": "d57051e99c304364e1b1bc682e038f2f",
".git/objects/ea/8bb352af72c28ae18ec167c983ea0fc92fe8bf": "47f164ce93c4f287f232fa1c068422f0",
".git/objects/ea/965242c6814779a4fe264b0711c51f5d0c3def": "ecae5d39dce14efb149d67095310e076",
".git/objects/ed/23b4135c9b09823323af78b7357f68d4be00de": "572fceff3d226ad61f3435cf2f5e9f32",
".git/objects/ed/b36a46335a7a3a9c375cdf78d2789c6b8fc886": "5b827a9d4afab028ae21b19ac3ed0875",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/439e55e74579c0708cbe2e09be17385f92b535": "d43c6f92416563276e90dcc835982805",
".git/objects/f3/d154d1e2112bcbe749e84e4211fd10eb393cd0": "e2496944979baa8f58980b23f7c36833",
".git/objects/f4/25855824ab0717aac8f8aafb9468af9652a916": "b65fd3bcc47643b63aa38db8a8d5e87b",
".git/objects/f7/1a9d85405cef351f5d7fb23170083037b1cff3": "ebd52a618eeb8be551d7a19268cad329",
".git/objects/f7/3611d0a71a4c08f2dc677fcc70c163ec4d5760": "f3342185ee5f77e1a986b63b59e4e1d1",
".git/objects/f7/c786e9bce41c955da678709fb6e54196bb4926": "f48c26e5893a3a7c59c860861ef4cd6e",
".git/objects/f7/df94bc77673965f34776c8b72cefa345ddadc2": "f3dd64b2c64a0322e25db965a5b89680",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/b60181891a7dd7b2a9d6ad6c3b2f3b272e1ebd": "b18d9e7344bd90e3eed6f8ef6717bcc2",
".git/objects/fc/c2ba5475ca4d02c627603a62343525e8a2e9a9": "d91f7f5ccad72cf962c6bd05ea6bf178",
".git/objects/ff/0a4cf1e2d00ca56296f60f793baaf90cc908dd": "410863550c2c0b32391a63b7a6bc061a",
".git/objects/ff/666d821e44c9fa8d6c7e08485821bd031d52e5": "0d3201b11be17d06e6604558768c3fa0",
".git/ORIG_HEAD": "9efc3a3ab0902280aa6432c83fdf90bb",
".git/refs/heads/master": "f3d3cd7be6a45a3855e6caefebac6b50",
".git/refs/remotes/origin/master": "f3d3cd7be6a45a3855e6caefebac6b50",
"assets/AssetManifest.json": "c9a46a5d9e06a88cb8d2ac5b59b73b78",
"assets/bigback.jpg": "43f16ec8d20e55565c8cdf56c81dea70",
"assets/cabbymob.jpg": "8ff602554d28234898eb8b811b871d50",
"assets/cabbymy.png": "91483590edc2221cce502d14fc2af3c9",
"assets/cntnew.png": "1200118cee4af757dc017b4bd23b1ce9",
"assets/cpp.png": "b4dd4c5e18b3c0a0c35018f37c2b2f94",
"assets/dash.png": "94b8139a9f1f2c226184af4106495c66",
"assets/dd.png": "eb1b6688dae894142944f95eddd89740",
"assets/ddmob.jpg": "1709c5494ba14bb5d9c3d1b3eb4864af",
"assets/evemob.jpg": "313ecdd01d9264a3d66734d7e3030b2a",
"assets/evt.jpg": "ece8bdaf1c8a1f92b02d2356eabb2195",
"assets/firebase.png": "fe4bf3d21e7c88264d34ffb1cc2d80b1",
"assets/flutter.png": "1b1259227a721a796c57237f63c12cc3",
"assets/FontManifest.json": "9d77005f72e1731eeea1ca69652eeb37",
"assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/iPhone.png": "4151c326a50e613310a5ff53846c25ba",
"assets/NOTICES": "71804789ddf0df662e5d93b2c1bf5ed9",
"assets/octocat.png": "ea8b6bf15eca5d4b518b441f601a3a07",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/python.png": "22284ad7b7210df2e08d708758b6c4e8",
"assets/quote.png": "7c5afd3e2ca0c6acd5e6ca04e6d1f7f2",
"assets/quotemob.jpg": "f459360cedc5ee83b24bfe1bea2091e9",
"assets/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/v1.mp4": "bdad9b1da5caa5459e76324bfb339653",
"assets/xd.png": "1759a9d11b74eaa0c194ae624419feac",
"assets/yash.jpg": "e0ad40338b2287b13359cf4e41ff3231",
"assets/yash2.jpg": "e16022229679663e8e219075878df750",
"assets/yp.jpg": "253f6e0c949bd1914a959e65dba75206",
"assets/yplight.png": "4f5ce4343ebd67b135a3fabdb53993ba",
"favicon.ico": "253f6e0c949bd1914a959e65dba75206",
"favicon.png": "253f6e0c949bd1914a959e65dba75206",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "97c0745ffac5548ee9eb016db931707d",
"/": "2528d73e8a7caed39e6cdf4e4f601224",
"main.dart": "01db0764677e47d979d93b183db80ccb",
"main.dart.js": "4997184d8b350c63fa6eadbfbe3dff73",
"manifest.json": "14e919b7b1dde549ab334b7ee3ce8412",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"Win10-90s-Edition/assets/addNetwork.png": "46865a8913c740ed5116607c60342e1f",
"Win10-90s-Edition/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"Win10-90s-Edition/assets/back.png": "59ea85aa33e4fe8397a9730b1a242de8",
"Win10-90s-Edition/assets/backk.png": "8a7eb31fde034d76d19d2ea2fed2c625",
"Win10-90s-Edition/assets/bin.png": "64364b1eee3ebc66eaacf4b952928ffb",
"Win10-90s-Edition/assets/calc.png": "3329018ccc40eee2694dde67e31c299e",
"Win10-90s-Edition/assets/cdrive.png": "e8f8aa57f790bc15c227bf19fceb6814",
"Win10-90s-Edition/assets/clippy.png": "9ed2837f0a3564d636e56fed24022a2b",
"Win10-90s-Edition/assets/clock.png": "9a866230dfd8636fac4dce46fc41aca3",
"Win10-90s-Edition/assets/desktopfolder.png": "f299c89f2e3e18c89014513557d63b87",
"Win10-90s-Edition/assets/desktoppp.png": "2d1d8eb503ebb74fb897127e8a982e44",
"Win10-90s-Edition/assets/docfolder.png": "9869a56ce4c02e63fb9865434cb607f3",
"Win10-90s-Edition/assets/document.png": "550d3a47de32d93709f5b8b3dde2d2bd",
"Win10-90s-Edition/assets/dos.png": "efec503ccc4e5a940671e837d54d9715",
"Win10-90s-Edition/assets/down.png": "e2a6ac0824580c389fe8d22f7cc28cf1",
"Win10-90s-Edition/assets/download.png": "6865d792ded526dc64ecbdb6e9f2c634",
"Win10-90s-Edition/assets/downloadfolder.png": "798f13e1f7a38fbf9e51a29d32737632",
"Win10-90s-Edition/assets/drive.png": "f1b0d0ed37f661b985f25031ebbf9412",
"Win10-90s-Edition/assets/edge.png": "0a0949a0bfe4319294d19b4ad97d2915",
"Win10-90s-Edition/assets/fileexp.png": "cd0c1260ba6ba8be52f096d449cdf2ae",
"Win10-90s-Edition/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Win10-90s-Edition/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"Win10-90s-Edition/assets/i1.png": "c8ea97f8709438f8a35bd179a9d0c77b",
"Win10-90s-Edition/assets/i2.png": "5cd794d891205ad56853880742628654",
"Win10-90s-Edition/assets/i3.png": "f7f8dc4f9acf347f4c5018794c40e708",
"Win10-90s-Edition/assets/i4.png": "0c7733bd6bd7faf0899e8fc59702e6fb",
"Win10-90s-Edition/assets/i5.png": "568081dedc710a28b16bc6942c2f9389",
"Win10-90s-Edition/assets/i6.png": "92f763cdf20b328f00ef5695601c0322",
"Win10-90s-Edition/assets/image.png": "fd17302c07af31fb2fc7bfd7750b7d86",
"Win10-90s-Edition/assets/logo.png": "ae6671c3cba161855324e9a35d1183a8",
"Win10-90s-Edition/assets/manage.png": "1593084ba3e4a713368a2bca432aa374",
"Win10-90s-Edition/assets/mapNetwork.png": "9bcce079e1866e2cc6dd93ae21fffb75",
"Win10-90s-Edition/assets/mediaServer.png": "7c3024181352dfc6128ccf6c63bef9d9",
"Win10-90s-Edition/assets/mine.png": "acd5141c83faa7e36a6bc7a34cec64cf",
"Win10-90s-Edition/assets/music.png": "0a1f9f5a6a932cc8af1f17be0c7175bd",
"Win10-90s-Edition/assets/mycomp.png": "b8e5723076a74ca155c3f4981d7c027b",
"Win10-90s-Edition/assets/mypc.png": "fb36c20b3adcd8c9e6c58f5e3f639ddc",
"Win10-90s-Edition/assets/network.png": "212227a24f96f79a710293427c2d11cb",
"Win10-90s-Edition/assets/newFolder.png": "6f01e5480d7739a773a6205d386b7ef5",
"Win10-90s-Edition/assets/next.png": "405866849cb53245870edf93ec46a387",
"Win10-90s-Edition/assets/nextAnotherr.png": "0cdffe094e88bc7d33638a91ab1290ed",
"Win10-90s-Edition/assets/note.png": "fc05456e30f21572163f739815c3bfad",
"Win10-90s-Edition/assets/NOTICES": "6de22813d79e02e5b20b1ba38cc1c84a",
"Win10-90s-Edition/assets/open.png": "805091f30ac06da0c9f7dacfa9fadfcd",
"Win10-90s-Edition/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Win10-90s-Edition/assets/paint.png": "7f2f7bfc66ad4c4f080f5c19068aee13",
"Win10-90s-Edition/assets/properties.png": "53bb141b2e10c81271acc6a27674b42f",
"Win10-90s-Edition/assets/property.png": "f9b2477f03f7dda9132cfa284fcaa349",
"Win10-90s-Edition/assets/QuickkAccess.png": "8518540dfb91e481147081f637d0353c",
"Win10-90s-Edition/assets/reload.png": "9261e78bb9f729a6bec0b96b547a262f",
"Win10-90s-Edition/assets/rename.png": "b106f8a73fb08812814dfba9e41e17ee",
"Win10-90s-Edition/assets/search.png": "21cda7303498be873128c37a5abae4db",
"Win10-90s-Edition/assets/settings.png": "802cb013271f6fc97a8c6068a76d85a7",
"Win10-90s-Edition/assets/systemproperty.png": "b8e5723076a74ca155c3f4981d7c027b",
"Win10-90s-Edition/assets/unistall.png": "13899c1bcf22a4ab1e9f829504aded0b",
"Win10-90s-Edition/assets/video.png": "f7dc533da936c7cf0bae3dc9b8e46a19",
"Win10-90s-Edition/assets/wallpaper.jpg": "14b6941574d1ad0cfa114ce796038854",
"Win10-90s-Edition/favicon.ico": "8c5b580622197923971b31dc74eb7fad",
"Win10-90s-Edition/favicon.png": "adcafff42a4e860f225bd4a473e9e975",
"Win10-90s-Edition/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Win10-90s-Edition/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Win10-90s-Edition/index.html": "2528d73e8a7caed39e6cdf4e4f601224",
"Win10-90s-Edition/main.dart.js": "5f9538bf4e8b04046bc3ae66c36856ce",
"Win10-90s-Edition/manifest.json": "ef5d3eafb7e5fd06a7f3807cf3685658",
"Win10-90s-Edition/version.json": "419bebb985435af80012e3dfc7097fd8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
