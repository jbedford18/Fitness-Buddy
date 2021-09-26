const { Tone } = require('../models');

const toneData = [
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Leg Extensions',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Bench Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Deadlifts',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Overhead Military Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },

    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Alternating Dumbbell Curls',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    }

]

const seedTone = () => Tone.bulkCreate(toneData);

module.exports = seedTone;