import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text_left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            handleEdit={() => handleEdit(post)}
            handleDelete={() => handleDelete(post)}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
