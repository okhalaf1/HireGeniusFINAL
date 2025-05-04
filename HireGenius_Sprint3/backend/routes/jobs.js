const express = require('express');
const router = express.Router();

const jobList = [
    { title: 'Frontend Developer', company: 'TechCorp' },
    { title: 'Backend Engineer', company: 'DataSoft' },
    { title: 'UI/UX Designer', company: 'Creative Inc.' }
];

router.get('/', (req, res) => {
    res.json(jobList);
});

module.exports = router;
