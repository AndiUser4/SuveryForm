const express = require('express');
const router = express.Router();
const Survey = require('../models/surveymodel');

 

// Route to save the survey answers
router.post('/firstpage', (req, res) => {
  const answer = req.body;

  const survey = new Survey(answer);

  survey.save()
    .then(() => {
      res.status(200).send('Survey answer saved successfully.');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred while saving the survey answer.');
    });
});

router.get('/firstpage', async (req, res) => {

  try {

    const feedback = await Survey.find();

    res.json(feedback);

  } catch (error) {

    res.status(501).json({ error: error.message });

  }

});

router.delete('/firstpage/:id', async (req, res) => {

  const { id } = req.params;




  try {

    await Survey.findByIdAndDelete(id);

    res.status(200).json({ message: 'Survey deleted successfully' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Failed to delete Survey' });

  }

});

module.exports = router;