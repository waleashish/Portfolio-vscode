import data from './jobs.json'

export const getJobs = () => {
    return data;
}

export default (req, res) => {
    const abouts = getJobs();
    res.json(abouts);
}