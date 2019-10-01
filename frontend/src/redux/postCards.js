const postData = (cards) => {
    return () => {
        const sendCards = async() => {
            console.log("Here");
            const location = "http://localhost:5000/data/add";
            const settings = {
                method: 'POST',
                body: JSON.stringify(cards),
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            try {
                const postResponse = await fetch(`${location}`, settings);
                const data = await postResponse.json();
                console.log("Success:", JSON.stringify(data));
            } catch(e) {
                return(e);
            }
        }

        sendCards();
    }
}

export default postData;