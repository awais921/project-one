const handleGenerate = async () => {
  if (!selectedImage) return;

  setLoading(true);

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: selectedImage,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setGeneratedImage(data.result);
    }
  } catch (error) {
    console.log(error);
  }

  setLoading(false);
};
