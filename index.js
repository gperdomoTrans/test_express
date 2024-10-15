import express from 'express';

const app = express();
app.get('/', (req, res) => res.status(200).json({code:"soy un dios de la filosofia griega :)"}));

app.listen(3000, () => {
  console.log(`App started on PORT ${3000}`);
});