import { Link } from "react-router-dom";
import "./ChitPlans.css";
import {
  getPlans,
  createPlans,
  deletePlans,
  updatePlans, // ✅ must exist
} from "../../services/chitPlan.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ChitPlans = () => {
  const [plans, setPlans] = useState([]);
  const [errors, setErrors] = useState("");

  const [planName, setPlanName] = useState("");
  const [planDuration, setPlanDuration] = useState("");
  const [editPlanId, setEditPlanId] = useState(null);

  // ✅ modal state
  const [showModal, setShowModal] = useState(false);

  // ================= LOAD DATA =================
  const loadData = async () => {
    try {
      const data = await getPlans();
      setPlans(data || []);
    } catch (error) {
      toast.error("Failed to load plans");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ================= OPEN ADD MODAL =================
  const openModal = () => {
    setErrors("");
    setEditPlanId(null);
    setPlanName("");
    setPlanDuration("");
    setShowModal(true);
  };

  // ================= CLOSE MODAL =================
  const closeModal = () => {
    setShowModal(false);
  };

  // ================= SUBMIT (ADD / UPDATE) =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!planName.trim() || !planDuration.trim()) {
      setErrors("Please Enter the Input Fields");
      return;
    }

    if (isNaN(planDuration)) {
      setErrors("Please Enter Valid Duration");
      return;
    }

    try {
      if (editPlanId) {

        await updatePlans(editPlanId, {
          plan_name: planName,
          plan_duration: planDuration,
        });

        toast.success("Plan Updated Successfully");
      } else {

        await createPlans({
          plan_name: planName,
          plan_duration: planDuration,
        });

        toast.success("Plan Added Successfully");
      }

      await loadData();
      closeModal();
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
      setErrors(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );
    }
  };

  // ================= EDIT =================
  const handleEdit = (item) => {
    setErrors("");
    setEditPlanId(item.id); // ⚠️ change to item._id if backend uses _id
    setPlanName(item.plan_name);
    setPlanDuration(item.plan_duration);
    setShowModal(true);
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (window.confirm("Delete this plan?")) {
      try {
        await deletePlans(id);
        toast.error("Plan has been deleted");
        loadData();
      } catch {
        toast.error("Delete failed");
      }
    }
  };

  return (
    <>
      <div className="plan_detail">
        <div className="d-flex align-items-center gap-2">
          <h5 className="mb-0">Plan Detail</h5>
          <div className="text-end my-3 flex-fill">
            <button className="btn main-btn" onClick={openModal}>
              <i className="bi bi-plus-circle"></i>&nbsp;Add New Plans
            </button>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="common-table-wrapper mt-4">
          <table className="common-table table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Plan Name</th>
                <th>Plan Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    No plans found
                  </td>
                </tr>
              ) : (
                plans.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.plan_name}</td>
                    <td>{item.plan_duration}</td>
                    <td className="action-buttons d-flex">
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(item)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ================= MODAL ================= */}
        {showModal && (
          <>
            <div className="modal-backdrop fade show"></div>

            <div className="modal form-modal fade show d-block" tabIndex="-1">
              <div className="modal-dialog modal_form modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">
                      {editPlanId ? "Edit Plan" : "Add New Plan"}
                    </h1>
                    <button className="btn-close" onClick={closeModal}></button>
                  </div>

                  <div className="modal-body form_content">
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-4">
                        <div className="col-lg-4">
                          <label className="form-label">Plan Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="plan name"
                            value={planName}
                            onChange={(e) => setPlanName(e.target.value)}
                          />
                        </div>

                        <div className="col-lg-4">
                          <label className="form-label">
                            Plan Duration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="plan duration"
                            value={planDuration}
                            onChange={(e) =>
                              setPlanDuration(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {errors && (
                        <p className="text-danger mt-2">{errors}</p>
                      )}

                      <div className="mt-4 text-end">
                        <button
                          type="button"
                          className="btn filter-btn"
                          onClick={closeModal}
                        >
                          Discard
                        </button>
                        <button type="submit" className="btn main-btn ms-2">
                          {editPlanId ? "Update Plan" : "Save Plan"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};