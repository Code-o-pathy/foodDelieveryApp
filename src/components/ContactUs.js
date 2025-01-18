const ContactUs = () => {
  return (
    <>
      <h1 className="font-bold text-2xl m-2 p-2">This is ContactUs page!</h1>

      <form>
        <input type="text" placeholder="Name" className="m-2 p-2 rounded border-blue-800 border-2"/>
        <input type="text" placeholder="Message for Me" className=" m-2 p-2 rounded border-blue-800 border-2"/>
        <button className="m-2 px-3 py-2 rounded-lg bg-yellow-100 border-blue-800 border-2">Submit</button>
      </form>
      {/* <h2 className=" text-xl m-2 p-2">
        Either you might have liked our work or may have some issues or
        feedback, in either cases, gtfo
      </h2> */}
    </>
  );
};
export default ContactUs;