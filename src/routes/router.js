const { createBrowserRouter } = require("react-router-dom");
const { default: JobSeek } = require("../components/JobSeek");
const { default: ShowJobHolder } = require("../components/ShowJobHolder/ShowJobHolder");

const router = createBrowserRouter([
  {
    path: '/',
    element: <JobSeek></JobSeek>
  },
  {
    path: '/show',
    element: <ShowJobHolder></ShowJobHolder>
  }
])

export default router;