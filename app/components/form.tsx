export default function Form({ fighter, attempts, handleSubmit }) {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <span>Attempts: {attempts}</span>
          <div>
            <input type="text" placeholder="eg: Alex Pereira"></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
