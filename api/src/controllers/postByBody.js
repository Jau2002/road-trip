const { Country, Activity } = require('../config/db.config');
const { OK, UNPROCESSABLE_ENTITY } = require('./protocols');

const postByBody = async (req, res) => {
	const { name, difficulty, going, leaving, seasons, countries } = req.body;
	try {
		const newActivity = await Activity.create({
			name,
			difficulty,
			going,
			leaving,
			seasons,
		});
		await Promise.all(
			countries?.map(async (country) => {
				const query = await Country.findOne({
					where: { name: country },
				});
				newActivity.addCountry(query);
			})
		);
		return res.status(OK).send({ message: 'Activity created successfully' });
	} catch (err) {
		return res.status(UNPROCESSABLE_ENTITY).send({ message: err.message });
	}
};

module.exports = postByBody;
