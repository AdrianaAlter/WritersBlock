# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.all[0].destroy
Prize.destroy_all

user1 = User.create({user_name: 'Sennacy the Greater', password: 'sennacy', points: 9999})

project1 = Project.create({title: 'Project1', body: '', user_id: user1.id, count: 0})
project2 = Project.create({title: 'Project2', body: '', user_id: user1.id, count: 0})
project3 = Project.create({title: 'Project3', body: '', user_id: user1.id, count: 0})

bg1 = Prize.create({name: 'leopard', category: 'background', price: 12})
bg2 = Prize.create({name: 'zebra', category: 'background', price: 12})
bg3 = Prize.create({name: 'snake-print', category: 'background', price: 12})
bg18 = Prize.create({name: 'tiger', category: 'background', price: 12})
bg56 = Prize.create({name: 'giraffe', category: 'background', price: 12})
bg19 = Prize.create({name: 'blue-leopard', category: 'background', price: 12})
bg20 = Prize.create({name: 'dark-square', category: 'background', price: 12})
bg21 = Prize.create({name: 'black-circuit', category: 'background', price: 12})
bg26 = Prize.create({name: 'maze', category: 'background', price: 12})
bg27 = Prize.create({name: 'math', category: 'background', price: 12})
bg28 = Prize.create({name: 'constellations', category: 'background', price: 12})
bg29 = Prize.create({name: 'fractal', category: 'background', price: 12})
bg50 = Prize.create({name: 'vortex', category: 'background', price: 12})
bg17 = Prize.create({name: 'diamonds', category: 'background', price: 12})
bg24 = Prize.create({name: 'chess', category: 'background', price: 12})
bg23 = Prize.create({name: 'green-stripes', category: 'background', price: 12})
bg4 = Prize.create({name: 'black-damask', category: 'background', price: 12})
bg8 = Prize.create({name: 'grey-damask', category: 'background', price: 12})
bg9 = Prize.create({name: 'purple-damask', category: 'background', price: 12})
bg12 = Prize.create({name: 'green-damask', category: 'background', price: 12})
bg13 = Prize.create({name: 'red-damask', category: 'background', price: 12})
bg14 = Prize.create({name: 'blue-damask', category: 'background', price: 12})
bg15 = Prize.create({name: 'pink-damask', category: 'background', price: 12})
bg16 = Prize.create({name: 'gold-damask', category: 'background', price: 12})
bg6 = Prize.create({name: 'regal', category: 'background', price: 12})
bg22 = Prize.create({name: 'gold-roses', category: 'background', price: 12})
bg7 = Prize.create({name: 'red-velvet', category: 'background', price: 12})
bg10 = Prize.create({name: 'parchment', category: 'background', price: 12})
bg11 = Prize.create({name: 'red-rug', category: 'background', price: 12})
bg25 = Prize.create({name: 'deco', category: 'background', price: 12})
bg30 = Prize.create({name: 'woodcut', category: 'background', price: 12})
bg31 = Prize.create({name: 'coffee', category: 'background', price: 12})
bg32 = Prize.create({name: 'lava-rock', category: 'background', price: 12})
bg33 = Prize.create({name: 'octo', category: 'background', price: 12})
bg34 = Prize.create({name: 'spain', category: 'background', price: 12})
bg35 = Prize.create({name: 'alexandria', category: 'background', price: 12})
bg36 = Prize.create({name: 'brooks', category: 'background', price: 12})
bg37 = Prize.create({name: 'northern', category: 'background', price: 12})
bg38 = Prize.create({name: 'royal', category: 'background', price: 12})
bg39 = Prize.create({name: 'salvage', category: 'background', price: 12})
bg40 = Prize.create({name: 'steadfast', category: 'background', price: 12})
bg41 = Prize.create({name: 'haunted', category: 'background', price: 12})
bg42 = Prize.create({name: 'medallion', category: 'background', price: 12})
bg43 = Prize.create({name: 'medusa', category: 'background', price: 12})
bg44 = Prize.create({name: 'queen', category: 'background', price: 12})
bg45 = Prize.create({name: 'antoinette', category: 'background', price: 12})
bg46 = Prize.create({name: 'avalon', category: 'background', price: 12})
bg47 = Prize.create({name: 'battle', category: 'background', price: 12})
bg48 = Prize.create({name: 'coaster', category: 'background', price: 12})
bg49 = Prize.create({name: 'snake', category: 'background', price: 12})
bg51 = Prize.create({name: 'whitelace', category: 'background', price: 12})
bg52 = Prize.create({name: 'birds', category: 'background', price: 12})
bg53 = Prize.create({name: 'party', category: 'background', price: 12})
bg54 = Prize.create({name: 'animals', category: 'background', price: 12})
bg55 = Prize.create({name: 'safari', category: 'background', price: 12})
bg57 = Prize.create({name: 'power', category: 'background', price: 12})
# bg34 = Prize.create({name: '', category: 'background', price: 12})
# bg35 = Prize.create({name: '', category: 'background', price: 12})
# bg36 = Prize.create({name: '', category: 'background', price: 12})
# bg34 = Prize.create({name: '', category: 'background', price: 12})
# bg35 = Prize.create({name: '', category: 'background', price: 12})
# bg36 = Prize.create({name: '', category: 'background', price: 12})
# bg36 = Prize.create({name: '', category: 'background', price: 12})
# bg34 = Prize.create({name: '', category: 'background', price: 12})
# bg35 = Prize.create({name: '', category: 'background', price: 12})
# bg36 = Prize.create({name: '', category: 'background', price: 12})
# bg34 = Prize.create({name: '', category: 'background', price: 12})
# bg35 = Prize.create({name: '', category: 'background', price: 12})
# bg36 = Prize.create({name: '', category: 'background', price: 12})

font1 = Prize.create({name: "'Bungee Inline', cursive", category: 'font', price: 5})
font2 = Prize.create({name: "'Tillana', cursive", category: 'font', price: 5})
font3 = Prize.create({name: "'Indie Flower', cursive", category: 'font', price: 5})
font4 = Prize.create({name: "'Pacifico', cursive", category: 'font', price: 5})
font5 = Prize.create({name: "'Shadows Into Light', cursive", category: 'font', price: 5})
font6 = Prize.create({name: "'Dancing Script', cursive", category: 'font', price: 5})
font7 = Prize.create({name: "'Architects Daughter', cursive", category: 'font', price: 5})
font8 = Prize.create({name: "'Permanent Marker', cursive", category: 'font', price: 5})
font9 = Prize.create({name: "'Kaushan Script', cursive", category: 'font', price: 5})
font10 = Prize.create({name: "'Rock Salt', cursive", category: 'font', price: 5})
font11 = Prize.create({name: "'Aref Ruqaa', serif", category: 'font', price: 5})
font12 = Prize.create({name: "'Satisfy', cursive", category: 'font', price: 5})
font13 = Prize.create({name: "'Courgette', cursive", category: 'font', price: 5})
font14 = Prize.create({name: "'Handlee', cursive", category: 'font', price: 5})
font15 = Prize.create({name: "'Sacramento', cursive", category: 'font', price: 5})
font16 = Prize.create({name: "'Great Vibes', cursive", category: 'font', price: 5})
font17 = Prize.create({name: "'Special Elite', cursive", category: 'font', price: 5})
font18 = Prize.create({name: "'Sofia', cursive", category: 'font', price: 5})
font19 = Prize.create({name: "'Just Another Hand', cursive", category: 'font', price: 5})
font20 = Prize.create({name: "'Niconne', cursive", category: 'font', price: 5})
font21 = Prize.create({name: "'Cabin Sketch', cursive", category: 'font', price: 5})
font22 = Prize.create({name: "'Quantico', sans-serif", category: 'font', price: 5})
font23 = Prize.create({name: "'Marcellus', serif", category: 'font', price: 5})
font24 = Prize.create({name: "'Vesper Libre', serif", category: 'font', price: 5})
font25 = Prize.create({name: "'Berkshire Swash', cursive", category: 'font', price: 5})
font26 = Prize.create({name: "'Montez', cursive", category: 'font', price: 5})
font27 = Prize.create({name: "'Cormorant', serif", category: 'font', price: 5})
font28 = Prize.create({name: "'Delius', cursive", category: 'font', price: 5})
font29 = Prize.create({name: "'UnifrakturMaguntia', cursive", category: 'font', price: 5})
font30 = Prize.create({name: "'Katibeh', cursive", category: 'font', price: 5})
font31 = Prize.create({name: "'Lily Script One', cursive", category: 'font', price: 5})
font32 = Prize.create({name: "'Rouge Script', cursive", category: 'font', price: 5})
font33 = Prize.create({name: "'Seaweed Script', cursive", category: 'font', price: 5})
font34 = Prize.create({name: "'Cherry Swash', cursive", category: 'font', price: 5})
font35 = Prize.create({name: "'Engagement', cursive", category: 'font', price: 5})
font36 = Prize.create({name: "'Fondamento', cursive", category: 'font', price: 5})
font37 = Prize.create({name: "'Balthazar', serif", category: 'font', price: 5})
font38 = Prize.create({name: "'Nosifer', cursive", category: 'font', price: 5})
font39 = Prize.create({name: "'Almendra', serif", category: 'font', price: 5})
font40 = Prize.create({name: "'New Rocker', cursive", category: 'font', price: 5})
font41 = Prize.create({name: "'Iceland', cursive", category: 'font', price: 5})
font42 = Prize.create({name: "'MedievalSharp', cursive", category: 'font', price: 5})
font43 = Prize.create({name: "'Caesar Dressing', cursive", category: 'font', price: 5})
font44 = Prize.create({name: "'Lancelot', cursive", category: 'font', price: 5})
font45 = Prize.create({name: "'Dr Sugiyama', cursive", category: 'font', price: 5})
font46 = Prize.create({name: "'Oregano', cursive", category: 'font', price: 5})
font47 = Prize.create({name: "'Maiden Orange', cursive", category: 'font', price: 5})
font48 = Prize.create({name: "'Salsa', cursive", category: 'font', price: 5})

red = Prize.create({name: 'red', category: 'color', price: 2})
darkred = Prize.create({name: 'darkred', category: 'color', price: 2})
firebrick = Prize.create({name: 'firebrick', category: 'color', price: 2})
indianred = Prize.create({name: 'indianred', category: 'color', price: 2})
red2 = Prize.create({name: '#A51212', category: 'color', price: 2})
maroon = Prize.create({name: 'maroon', category: 'color', price: 2})
maroon2 = Prize.create({name: '#900C3E', category: 'color', price: 2})

crimson = Prize.create({name: 'crimson', category: 'color', price: 2})
deeppink = Prize.create({name: 'deeppink', category: 'color', price: 2})
pink = Prize.create({name: 'pink', category: 'color', price: 2})
salmon = Prize.create({name: 'salmon', category: 'color', price: 2})

blue = Prize.create({name: 'blue', category: 'color', price: 2})
cadetblue = Prize.create({name: 'cadetblue', category: 'color', price: 2})
aquamarine = Prize.create({name: 'aquamarine', category: 'color', price: 2})
teal = Prize.create({name: 'teal', category: 'color', price: 2})
cornflowerblue = Prize.create({name: 'cornflowerblue', category: 'color', price: 2})
darkblue = Prize.create({name: 'darkblue', category: 'color', price: 2})
darkcyan = Prize.create({name: 'darkcyan', category: 'color', price: 2})
slateblue = Prize.create({name: 'slateblue', category: 'color', price: 2})
navy = Prize.create({name: 'navy', category: 'color', price: 2})

indigo = Prize.create({name: 'indigo', category: 'color', price: 2})
blueviolet = Prize.create({name: 'blueviolet', category: 'color', price: 2})
rebeccapurple = Prize.create({name: 'rebeccapurple', category: 'color', price: 2})
mediumpurple = Prize.create({name: 'mediumpurple', category: 'color', price: 2})
plum = Prize.create({name: 'plum', category: 'color', price: 2})
palevioletred = Prize.create({name: 'palevioletred', category: 'color', price: 2})

green = Prize.create({name: 'green', category: 'color', price: 2})
darkgreen = Prize.create({name: 'darkgreen', category: 'color', price: 2})
darkolivegreen = Prize.create({name: 'darkolivegreen', category: 'color', price: 2})
seagreen = Prize.create({name: 'seagreen', category: 'color', price: 2})
green2 = Prize.create({name: '#0F490F', category: 'color', price: 2})
green3 = Prize.create({name: '#031002', category: 'color', price: 2})

white = Prize.create({name: 'white', category: 'color', price: 2})
antiquewhite = Prize.create({name: 'antiquewhite', category: 'color', price: 2})
blanchedalmond = Prize.create({name: 'blanchedalmond', category: 'color', price: 2})
tan = Prize.create({name: 'tan', category: 'color', price: 2})
moccasin = Prize.create({name: 'moccasin', category: 'color', price: 2})
rosybrown = Prize.create({name: 'rosybrown', category: 'color', price: 2})
saddlebrown = Prize.create({name: 'saddlebrown', category: 'color', price: 2})
sienna = Prize.create({name: 'sienna', category: 'color', price: 2})
khaki = Prize.create({name: 'khaki', category: 'color', price: 2})
brown2 = Prize.create({name: '#CEAA78', category: 'color', price: 2})
brown3 = Prize.create({name: '#342613', category: 'color', price: 2})
yellow = Prize.create({name: '#D18D04', category: 'color', price: 2})

dimgrey = Prize.create({name: 'dimgrey', category: 'color', price: 2})
darkslategrey = Prize.create({name: 'darkslategrey', category: 'color', price: 2})
gray = Prize.create({name: 'gray', category: 'color', price: 2})
lightgrey = Prize.create({name: 'lightgrey', category: 'color', price: 2})

frame1 = Prize.create({name: 'wood', category: 'frame', price: 8})
frame2 = Prize.create({name: 'silver', category: 'frame', price: 8})
frame3 = Prize.create({name: 'gold', category: 'frame', price: 8})
frame25 = Prize.create({name: 'copper', category: 'frame', price: 8})
frame28 = Prize.create({name: 'bronze', category: 'frame', price: 8})
frame27 = Prize.create({name: 'metal1', category: 'frame', price: 8})
frame29 = Prize.create({name: 'embossed-swirl', category: 'frame', price: 8})
frame31 = Prize.create({name: 'embossed-copper', category: 'frame', price: 8})
frame30 = Prize.create({name: 'metal-swirl', category: 'frame', price: 8})
frame4 = Prize.create({name: 'leather', category: 'frame', price: 8})
frame34 = Prize.create({name: 'alligator', category: 'frame', price: 8})
frame33 = Prize.create({name: 'quilted', category: 'frame', price: 8})
frame5 = Prize.create({name: 'marble', category: 'frame', price: 8})
frame35 = Prize.create({name: 'marble2', category: 'frame', price: 8})
frame36 = Prize.create({name: 'blue-marble', category: 'frame', price: 8})
frame32 = Prize.create({name: 'rose-quartz', category: 'frame', price: 8})
frame6 = Prize.create({name: 'mosaic', category: 'frame', price: 8})
frame7 = Prize.create({name: 'lava', category: 'frame', price: 8})
frame11 = Prize.create({name: 'red-glass', category: 'frame', price: 8})
frame8 = Prize.create({name: 'green-glass', category: 'frame', price: 8})
frame9 = Prize.create({name: 'black-glass', category: 'frame', price: 8})
frame12 = Prize.create({name: 'purple-glass', category: 'frame', price: 8})
frame13 = Prize.create({name: 'amber-glass', category: 'frame', price: 8})
frame14 = Prize.create({name: 'gold-glass', category: 'frame', price: 8})
frame15 = Prize.create({name: 'magenta-glass', category: 'frame', price: 8})
frame16 = Prize.create({name: 'pink-glass', category: 'frame', price: 8})
frame18 = Prize.create({name: 'blue-glass', category: 'frame', price: 8})
frame10 = Prize.create({name: 'broken-glass', category: 'frame', price: 8})
frame17 = Prize.create({name: 'clear-glass', category: 'frame', price: 8})
frame25 = Prize.create({name: 'ice-cubes', category: 'frame', price: 8})
frame21 = Prize.create({name: 'red-floral', category: 'frame', price: 8})
frame20 = Prize.create({name: 'green-floral', category: 'frame', price: 8})
frame22 = Prize.create({name: 'mauve-floral', category: 'frame', price: 8})
frame23 = Prize.create({name: 'brown-floral', category: 'frame', price: 8})
frame24 = Prize.create({name: 'leopard-fur', category: 'frame', price: 8})
frame26 = Prize.create({name: 'black-swirl', category: 'frame', price: 8})

chalkboard = Prize.create({name: 'chalkboard', category: 'paper', price: 10})
blackboard = Prize.create({name: 'blackboard', category: 'paper', price: 10})
graph_paper = Prize.create({name: 'graph-paper', category: 'paper', price: 10})
slate = Prize.create({name: 'slate', category: 'paper', price: 10})
scroll = Prize.create({name: 'scroll', category: 'paper', price: 10})
papyrus = Prize.create({name: 'papyrus', category: 'paper', price: 10})
vellum = Prize.create({name: 'vellum', category: 'paper', price: 10})
stained = Prize.create({name: 'stained', category: 'paper', price: 10})
cracked = Prize.create({name: 'cracked', category: 'paper', price: 10})
patterned = Prize.create({name: 'patterned', category: 'paper', price: 10})
pink_paper = Prize.create({name: 'pink-paper', category: 'paper', price: 10})
red_paper = Prize.create({name: 'red-paper', category: 'paper', price: 10})
gold_paper = Prize.create({name: 'gold-paper', category: 'paper', price: 10})
blue_paper = Prize.create({name: 'blue-paper', category: 'paper', price: 10})
light_green_paper = Prize.create({name: 'light-green-paper', category: 'paper', price: 10})
purple_paper = Prize.create({name: 'purple-paper', category: 'paper', price: 10})
grey_paper = Prize.create({name: 'grey-paper', category: 'paper', price: 10})
black_paper = Prize.create({name: 'black-paper', category: 'paper', price: 10})
tan_paper = Prize.create({name: 'tan-paper', category: 'paper', price: 10})
cardboard = Prize.create({name: 'cardboard', category: 'paper', price: 10})
bag = Prize.create({name: 'bag', category: 'paper', price: 10})
bag2 = Prize.create({name: 'bag2', category: 'paper', price: 10})
pink_flecked = Prize.create({name: 'pink-flecked', category: 'paper', price: 10})
peach_flecked = Prize.create({name: 'peach-flecked', category: 'paper', price: 10})
red_flecked = Prize.create({name: 'red-flecked', category: 'paper', price: 10})
