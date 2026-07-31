import { addDays, format } from "date-fns";
import type { Exercise, Phase, ProgramDay, Settings } from "@/domain/types";
type Seed=[string,string,Exercise["category"],Exercise["primary"],Exercise["secondary"],number,number,number,number,number,string,number,string?];
const raw:Seed[]=[
["incline-smith","Smith Incline Bench Press","compound","upper chest",["chest","front delts","triceps"],4,6,8,1,2,"3-1-1",150],
["bench","Barbell Bench Press","compound","chest",["triceps","front delts"],3,6,10,1,2,"3-0-1",150],
["low-fly","Low-to-High Cable Fly","isolation","upper chest",["chest"],3,10,15,1,1,"2-1-2",75],
["shoulder-press","Smith Shoulder Press","compound","front delts",["triceps"],3,8,10,2,2,"3-0-1",120],
["single-lateral","Single-Arm Cable Lateral Raise","isolation","side delts",[],4,12,20,0,1,"2-1-2",60],
["rear-fly","Rear-Delt Cable Fly","isolation","rear delts",["upper back"],3,15,20,0,1,"2-1-2",60],
["smith-squat","Smith Squat","compound","quads",["glutes"],4,6,10,2,2,"3-1-1",165],
["heel-squat","Heel-Elevated Smith Squat","compound","quads",["glutes"],3,10,12,1,2,"3-1-1",120],
["leg-extension","Leg Extension","isolation","quads",[],4,12,15,0,1,"2-1-3",75],
["bulgarian","Bulgarian Split Squat","compound","quads",["glutes"],3,8,12,1,2,"3-0-1",90],
["calf","Standing Calf Raise","isolation","calves",[],5,8,15,1,1,"2-2-2",75],
["crunch","Cable Crunch","isolation","abs",[],3,10,15,1,1,"2-1-2",60],
["ab-wheel","Ab Wheel","compound","abs",[],3,6,12,1,2,"3-0-1",60],
["pulldown","Neutral-Grip Lat Pulldown","compound","lats",["biceps"],4,8,12,1,2,"2-1-2",120],
["row","Barbell Bent-Over Row","compound","upper back",["lats","biceps","lower back"],4,8,12,1,2,"2-1-2",120,"Chest-Supported Dumbbell Row"],
["one-pulldown","One-Arm Cable Pulldown","isolation","lats",["biceps"],3,10,15,1,1,"2-1-2",75],
["pullover","Cable Pullover","isolation","lats",[],3,12,15,1,1,"2-1-2",75],
["curl","Cable Curl","isolation","biceps",[],3,10,15,1,1,"2-1-2",75],
["db-curl","Neutral-Grip Dumbbell Curl","isolation","biceps",[],3,8,12,1,2,"2-0-2",75],
["pushdown","Rope Pushdown","isolation","triceps",[],4,10,15,1,1,"2-1-2",75],
["incline-db","Incline Dumbbell Press","compound","upper chest",["chest","triceps"],4,8,12,1,2,"3-0-1",120],
["flat-smith","Smith Flat Press","compound","chest",["triceps"],3,10,12,1,1,"3-0-1",120],
["cable-fly","Cable Fly","isolation","chest",[],3,12,20,0,1,"2-1-2",60],
["overhead-tri","Rope Overhead Triceps Extension","isolation","triceps",[],3,10,15,1,1,"2-1-2",75],
["cross-tri","Cross-Body Cable Triceps Extension","isolation","triceps",[],3,12,15,1,1,"2-1-2",60],
["bayesian","Bayesian Cable Curl","isolation","biceps",[],3,10,15,1,1,"2-1-2",75],
["lateral","Cable Lateral Raise","isolation","side delts",[],3,15,20,0,1,"2-1-2",60],
["rdl","Barbell Romanian Deadlift","compound","hamstrings",["glutes","lower back"],4,6,10,2,2,"3-1-1",150],
["leg-curl","Leg Curl","isolation","hamstrings",[],4,10,15,1,1,"2-1-3",90],
["lunge","Reverse Lunge","compound","quads",["glutes"],3,8,12,1,2,"3-0-1",90]
];
export const exercises:Exercise[]=raw.map(([id,name,category,primary,secondary,sets,repMin,repMax,rirMin,rirMax,tempo,rest,alternative])=>({id,name,category,equipment:name.includes("Cable")||name.includes("Pulldown")||name.includes("Pushdown")?"Cable system and attachments":name.includes("Smith")?"Mikolo M4 Ultra Smith rack":"Home gym",primary,secondary,unilateral:name.includes("Single")||name.includes("One-Arm")||name.includes("Split")||name.includes("Lunge"),sets,repMin,repMax,rirMin,rirMax,tempo,rest,increment:category==="compound"?(primary==="quads"||primary==="hamstrings"?10:5):2.5,notes:"Control the eccentric; use a stable range of motion.",alternative,active:true}));
export const days:ProgramDay[]=[
{id:"d1",name:"Chest Heavy + Delts",exerciseIds:["incline-smith","bench","low-fly","shoulder-press","single-lateral","rear-fly"]},
{id:"d2",name:"Quads + Calves + Abs",exerciseIds:["smith-squat","heel-squat","leg-extension","bulgarian","calf","crunch","ab-wheel"]},
{id:"d3",name:"Back + Arms",exerciseIds:["pulldown","row","one-pulldown","pullover","curl","db-curl","pushdown"]},
{id:"d4",name:"Chest + Arms Volume",exerciseIds:["incline-db","flat-smith","cable-fly","overhead-tri","cross-tri","bayesian","lateral"]},
{id:"d5",name:"Posterior Chain + Delts + Abs",exerciseIds:["rdl","leg-curl","lunge","leg-extension","calf","lateral","ab-wheel"]}];
const today=new Date();
export const phases:Phase[]=[{id:"cut",name:"Hawaii Cut",active:true,startDate:format(today,"yyyy-MM-dd"),targetDate:format(addDays(today,23),"yyyy-MM-dd"),calories:2350,protein:215,fat:65,carbs:226,steps:9000,cardioSessions:5,cardioMinutes:25,goalWeight:190.5,notes:"Target 0.75–1.25 lb loss weekly."},{id:"gain",name:"Lean Gain",active:false,startDate:format(addDays(today,24),"yyyy-MM-dd"),targetDate:format(addDays(today,150),"yyyy-MM-dd"),calories:2850,protein:200,fat:75,carbs:344,steps:8000,cardioSessions:3,cardioMinutes:25,goalWeight:200,notes:"Target 0.25–0.5 lb gain weekly."}];
export const settings:Settings={id:"settings",theme:"dark",units:"imperial",waterTarget:128,sleepTarget:8,primaryCoefficient:1,secondaryCoefficient:.5,showE1rm:true,weekStart:1};
