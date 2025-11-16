import express from 'express';
const app = express();
app.use(express.json());
app.get('/v1/health', (req, res) => res.json({ ok: true }));
app.listen(4000, () => console.log('AfterMe API listening on http://localhost:4000'));