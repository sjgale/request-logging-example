"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(helmet_1.default());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('*', express_1.default.static(path_1.default.resolve(process.env.DIST_PATH, 'client')));
app.get('*', function (req, res, next) {
    res.sendFile(path_1.default.resolve(process.env.DIST_PATH, 'client/index.html'));
});
app.listen(3000, function () {
    console.log('listening on port: 3000');
});
// (async () => {
//   console.log('######## Lets get some K9s! ########\n\n');
//   let dogBreedsResponse, dogBreeds;
//   try {
//     dogBreedsResponse = await dogs.getDogBreeds();
//   } catch (err) {
//     console.log('%%%%%%%%%%%% Crap! Dog breeds didn\'t load! %%%%%%%%%%%%\n\n');
//   }
//   dogBreeds = dogBreedsResponse && dogBreedsResponse.data && Object.keys(dogBreedsResponse.data.message).join(', ') || 'There was an error getting breeds!';
//   let dogImageResponse = await dogs.getRandomDogImage().catch(err => {
//     console.log('%%%%%%%%%%%% Shoot, no dog picture!! %%%%%%%%%%%%\n\n');
//   })
//   let dogImage = dogImageResponse && dogImageResponse.data && dogImageResponse.data.message || 'Error getting image!';
//   console.log('Dog Breeds:\n', dogBreeds, '\n\nDog Image:\n', dogImage);
//   console.log('\n\n######## Dog time is over! ########');
// })();
//# sourceMappingURL=index.js.map