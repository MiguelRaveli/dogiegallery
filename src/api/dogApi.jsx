export const fetchDogs = async (setDogs, setLoading, pageNumber) => {
  try {
    const res = await fetch(
      `https://api.thedogapi.com/v1/breeds?limit=12&page=${pageNumber}`
    );
    const data = await res.json();
    setDogs(data);
  } catch (error) {
    console.log("Erro fecthing data", error);
  } finally {
    setLoading(false);
  }
};

export const fetchSearchDogs = async (setDogs, setLoading) => {
  try {
    const res = await fetch(
      `https://api.thedogapi.com/v1/breeds`
    );
    const data = await res.json();
    setDogs(data);
  } catch (error) {
    console.log("Erro fecthing data", error);
  } finally {
    setLoading(false);
  }
};

 

export const fetchImageDog = async (dog, setImageDog, setLoading) => {
  try {
    const res = await fetch(
      `https://api.thedogapi.com/v1/images/${dog.reference_image_id}`
    );
    const data = await res.json();
    setImageDog(data);
  } catch (error) {
    console.log("Erro fecthing data", error);
  } finally {
    setLoading(false);
  }
};

export const fetchFindDogById = async (setDogs, setLoading, id) => {
  try {
    const res = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
    const data = await res.json();
    setDogs(data);
  } catch (error) {
    console.log("Erro fecthing data", error);
  } finally {
    setLoading(false);
  }
};
