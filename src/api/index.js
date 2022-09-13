import axios from "axios";

export function showtoast(toast, title, description, status) {
  return toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
  });
}

const api = axios.create({
  baseURL: "https://gamelist-backendserver.herokuapp.com/api",
  // baseURL: "http://localhost:5000/api",
});

export const creategame = async (
  obj,
  setloading,
  toast
  //   navigate
) => {
  try {
    setloading(true);
    const { data } = await api.post(`/creategame`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Game has been created successfully",
      "success"
    );
    // navigate("/admindashboard/users");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editgame = async (obj, setloading, toast, id, navigate) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editgame/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Game has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/games");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editbuttonlinkglobal = async (
  obj,
  setloading,
  toast,
  navigate
) => {
  try {
    setloading(true);
    const { data } = await api.put(`/updatebuttonlinksglobally`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Button Link has been updated globally successfully",
      "success"
    );
    localStorage.setItem("buttonlinks", JSON.stringify(obj));
    setTimeout(() => {
      navigate("/admin/games");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const deletegame = async (toast, id, fetchagain, setfetchagain) => {
  try {
    const { data } = await api.delete(`/deletegame/${id}`);
    showtoast(
      toast,
      "Success",
      "Game has been deleted successfully",
      "success"
    );
    setfetchagain(!fetchagain);
  } catch (error) {
    console.log(error.message);
    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const gethomepagegames = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/gethomepagegames`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};
export const getAllgames = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/games`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getcategorygames = async (setloading, toast, setdata, id) => {
  try {
    setloading(true);
    const { data } = await api.get(`/categorygames/${id}`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getAllcategories = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/gamecategories`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const creategamecategory = async (
  obj,
  setloading,
  toast
  //   navigate
) => {
  try {
    setloading(true);
    const { data } = await api.post(`/creategamecategory`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Game Category has been created successfully",
      "success"
    );
    // navigate("/admindashboard/users");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editgamecategory = async (
  obj,
  setloading,
  toast,
  id,
  navigate
) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editgamecategory/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Game has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/categories");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const deletegamecategory = async (
  toast,
  id,
  fetchagain,
  setfetchagain
) => {
  try {
    const { data } = await api.delete(`/deletegamecategory/${id}`);
    showtoast(
      toast,
      "Success",
      "Game has been deleted successfully",
      "success"
    );
    setfetchagain(!fetchagain);
  } catch (error) {
    console.log(error.message);
    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const createarticle = async (
  obj,
  setloading,
  toast
  //   navigate
) => {
  try {
    setloading(true);
    const { data } = await api.post(`/createarticle`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Article has been created successfully",
      "success"
    );
    // navigate("/admindashboard/users");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editarticle = async (obj, setloading, toast, id, navigate) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editarticle/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Article has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/articles");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const deletearticle = async (toast, id, fetchagain, setfetchagain) => {
  try {
    const { data } = await api.delete(`/deletearticle/${id}`);
    showtoast(
      toast,
      "Success",
      "Article has been deleted successfully",
      "success"
    );
    setfetchagain(!fetchagain);
  } catch (error) {
    console.log(error.message);
    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getarticles = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/getarticles`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};
export const getarticle = async (setloading, toast, setdata, id) => {
  try {
    setloading(true);
    const { data } = await api.get(`/getarticle/${id}`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const gethomepagearticle = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/gethomepagearticle`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const createcoulmn = async (
  obj,
  setloading,
  toast
  //   navigate
) => {
  try {
    setloading(true);
    const { data } = await api.post(`/createcolumn`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Column has been created successfully",
      "success"
    );
    // navigate("/admindashboard/users");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editcolumn = async (obj, setloading, toast, id, navigate) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editcolumn/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Table Column has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/column");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const deletecolumn = async (toast, id, fetchagain, setfetchagain) => {
  try {
    const { data } = await api.delete(`/deletecolumn/${id}`);
    showtoast(
      toast,
      "Success",
      "Column has been deleted successfully",
      "success"
    );
    setfetchagain(!fetchagain);
  } catch (error) {
    console.log(error.message);
    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getcolumn = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/getcolumn`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const adminlogin = async (obj, setloading, toast, setdata, navigate) => {
  try {
    setloading(true);
    const { data } = await api.post(`/loginadmin`, obj);
    setdata(true);
    localStorage.setItem("admin", JSON.stringify(true));
    showtoast(toast, "Success", "Logged in successfully", "success");
    // localStorage.getItem("admin");
    setloading(false);
    navigate("/admin/games");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};
export const updateadmin = async (
  obj,
  setloading,
  toast,
  setdata,
  navigate
) => {
  try {
    setloading(true);
    const { data } = await api.put(`/updateadmin`, obj);
    setdata(true);
    localStorage.setItem("admin", JSON.stringify(true));
    showtoast(toast, "Success", "Password updated successfully", "success");
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const adminlogout = (toast, setadmin, navigate) => {
  setadmin(false);
  localStorage.removeItem("admin");
  showtoast(toast, "Success", "Logged out successfully", "success");
  navigate("/adminlogin");
};

export const createscript = async (
  obj,
  setloading,
  toast
  //   navigate
) => {
  try {
    setloading(true);
    const { data } = await api.post(`/createscript`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Script has been created successfully",
      "success"
    );
    // navigate("/admindashboard/users");
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editscript = async (obj, setloading, toast, id, navigate) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editscript/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Script has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/scripts");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getscripts = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/getscripts`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const deletescript = async (toast, id, fetchagain, setfetchagain) => {
  try {
    const { data } = await api.delete(`/deletescript/${id}`);
    showtoast(
      toast,
      "Success",
      "Script has been deleted successfully",
      "success"
    );
    setfetchagain(!fetchagain);
  } catch (error) {
    console.log(error.message);
    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const editslidertext = async (obj, setloading, toast, id, navigate) => {
  try {
    setloading(true);
    const { data } = await api.put(`/editslidertext/${id}`, obj);
    setloading(false);
    showtoast(
      toast,
      "Success",
      "Slider text has been updated successfully",
      "success"
    );
    setTimeout(() => {
      navigate("/admin/slidertexts");
    }, 1000);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};

export const getslidertext = async (setloading, toast, setdata) => {
  try {
    setloading(true);
    const { data } = await api.get(`/getslidertext`);
    setdata(data.data);
    setloading(false);
  } catch (error) {
    console.log(error.message);
    setloading(false);

    if (error.response.data.message) {
      showtoast(toast, "Error", error.response.data.message, "error");
    } else {
      showtoast(toast, "Error", "Something went wrong", "error");
    }
  }
};
