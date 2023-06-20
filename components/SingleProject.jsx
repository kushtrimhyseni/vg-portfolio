const SingleProject = async ({ singleProject }) => {
  return (
    <div>
      <h1>{singleProject?.projectName}</h1>
      <p>{singleProject?.projectDescription}</p>
      <p>Technologies used: {singleProject?.projectTechnology}</p>
      {/* Render images here if applicable */}
    </div>
  );
};

export default SingleProject;
