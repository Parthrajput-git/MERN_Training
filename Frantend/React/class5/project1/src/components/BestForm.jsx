import { useState } from "react"
function BestForm() {

    const [formData, setFormData] = useState({
        fName: "",
        email: "",
        password: "",
        Dob: "",
        education: "",
        gender: "female",
        course: "BA",
        resume: "",

    })

    const [familyMember, setFamilyMember] = useState([])

    function handleFamilyMember(event) {
        console.log(event.target)
        console.log(event.target.checked)
        console.log(event.target.name)
        // setFamilyMember(event.target.value)// yor dirctlt make array to normal variable==Wrong hai
        // setFamilyMember([event.target.value])// you are not storing old value directly put new value== wrong hai
        const { value, checked } = event.target


        if (checked) {
            setFamilyMember((familyMember) => {
                return [
                    ...familyMember, value
                ]

            })
            return;
        }

        else {

            let ans = familyMember.filter(member => member !== value)
            setFamilyMember(ans)

        }



    }
    function handleChange(event) {
        // setFormData(event.target.value)// directly convert object into single variable value that is text
        console.log(event.target)
        console.log(event.target.name)
        // setFormData((formData) => {
        //     return { ...formData, [event.target.name]: event.target.value }
        // })

        const { name, value } = event.target;
        setFormData((formData) => {
            return { ...formData, [name]: value }
        })
    }
    function printData(event) {
        event.preventDefault();
        formData.familyMember = familyMember;
        console.log(formData)
        console.log("family member array", familyMember)
    }
    return (
        <div><h1>Best form</h1>
            <form onSubmit={printData}>

                <div>
                    <label htmlFor="fName">FirstName</label>
                    <input type="text" id="fName" name="fName" placeholder="Enter your First Name"
                        value={formData.fName} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email "
                        value={formData.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your First Name"
                        value={formData.password} onChange={handleChange} autoComplete="on" />
                </div>


                <div>
                    <h1>Choose Your Gender</h1>
                    <label htmlFor="male">male</label>
                    <input type="radio" id="male" name="gender" value="male"
                        onChange={handleChange} />
                    <label htmlFor="Female">Female</label>
                    <input type="radio" id="Female" name="gender" value="female" checked={formData.gender === "female"}
                        onChange={handleChange} />
                    <label htmlFor="Others">Others</label>
                    <input type="radio" id="Others" name="gender" value="Others"
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Dob">Dob</label>
                    <input type="date" id="Dob" name="Dob" placeholder="Enter your First Name"
                        value={formData.Dob} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="education">Write yourself for Education</label>
                    <textarea id="education" name="education" placeholder="Enter your Thoughts"
                        value={formData.education} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="resume">Upload Resume</label>
                    <input type="file" id="resume" name="resume"
                        value={formData.resume} onChange={handleChange} />
                </div>
                <br />

                <div>
                    <select id="course" name="course" onChange={handleChange}>
                        <option value="B.Tech" >B.Tech</option>
                        <option value="Bsc">Bsc</option>
                        <option value="BA" defaultValue={formData.course === "BA"}>BA</option>
                        <option value="MCA">MCA</option>
                    </select>

                </div>

                <div>
                    <h1>Tick Your Family Members</h1>

                    <input type="checkbox" id="Father" name="Father" value="Father"
                        onChange={handleFamilyMember} />
                    <label htmlFor="Father">Father</label>

                    <input type="checkbox" id="Mother" name="Mother" value="Mother"
                        onChange={handleFamilyMember} />
                    <label htmlFor="Mother">Mother</label>

                    <input type="checkbox" id="Sister" name="Sister" value="Sister"
                        onChange={handleFamilyMember} />
                    <label htmlFor="Sister">Sister</label>


                    <input type="checkbox" id="Brother" name="Brother" value="Brother"
                        onChange={handleFamilyMember} />
                    <label htmlFor="Brother">Brother</label>

                </div>



                <div>
                    <button >submit</button>
                </div>
            </form>
        </div>
    )
}

export default BestForm