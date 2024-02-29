import data from './internships.json'

export const getInternships = () => {
    return data;
}

export default (req, res) => {
    const abouts = getInternships();
    res.json(abouts);
}