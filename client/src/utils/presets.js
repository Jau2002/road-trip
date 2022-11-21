export const defaultInputsValue = {
	name: '',
	difficulty: 0,
	going: '',
	leaving: '',
	seasons: [],
	countries: [],
};

const currentDay = new Date();

export const initialDateToGoing = `${currentDay.getFullYear()}-${currentDay.getMonth()}-${currentDay.getDate()}`;

export const finallyDate = `${
	currentDay.getFullYear() + 1
}-${currentDay.getMonth()}-${currentDay.getDate()}`;

export const initialDateToLeaving = `${currentDay.getFullYear()}-${currentDay.getMonth()}-${
	currentDay.getDate() + 1
}`;

export const seasons = ['Summer', 'Autumn', 'Winter', 'Spring'];
