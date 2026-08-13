export default function Form() {
    return `
        <form action="/submit" method="post">
            <input type="text" placeholder="Enter UserName"/> <br/><br/>
            <input type="password" placeholder="Enter Password"/> <br/><br/>
            <button> Submit </button>
        </form>
        <a href='/'>Go to Home</a>
    `
}