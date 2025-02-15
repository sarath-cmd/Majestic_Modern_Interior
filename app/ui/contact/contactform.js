

const contactform = () => {
  return (
    <div>
        <form className="flex flex-col mx-10 sm:mx-28 md:mx-10 xl:mx-28 mb-10" action="mailto:mmiint24@gmail.com" method="post" encType="text/plain">
            <label className="font-medium text-lg">Subject:</label>
            <input type="text" name="subject" placeholder="Reason for Contacting" required autoFocus  className="mb-5 mt-1 p-2 bg-slate-200 rounded md:ml-5"/>
            <label className="font-medium text-lg">Email:</label>
            <input type="email" name="email" placeholder="Your Email" required className="mb-5 mt-1 p-2 bg-slate-200 rounded md:ml-5"  />
            <label className="font-medium text-lg">Your Message:</label>
            <textarea name="body" placeholder="Your Message" required className="mb-5 mt-1 p-2 bg-slate-200 rounded md:ml-5 overflow-scroll overflow-x-hidden" ></textarea>
            <button className="bg-orange-200 w-[40vw] md:w-[25vw] md:ml-5 rounded-2xl py-2 font-bold text-orange-800" value="Send" >Submit</button>
        </form>
    </div>
  )
}

export default contactform