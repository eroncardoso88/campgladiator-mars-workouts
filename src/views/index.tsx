import { Workouts } from "@/components/Workouts";
import { WorkoutVideo } from "@/components/WorkoutVideo";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { FunctionComponent } from "react";
export const Views: FunctionComponent = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Workouts/>} />
        <Route path="/workout/:id" element={<WorkoutVideo />} />
        <Route path="*">Page not found</Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Views;
