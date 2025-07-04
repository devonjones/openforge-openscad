include <lock_dragonlock.scad>
include <lock_infinitylock.scad>
include <lock_openlock.scad>
include <lock_openlock_topless.scad>
include <lock_magnetic.scad>
include <lock_flex_magnetic.scad>

/*
 * Connector Layout
 */
module center_connector_positive(edge, priority, lock, magnets, magnet_hole, height=6, topless=TOPLESS) {
    if (edge == 1) {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true"))) {
            openlock_topless_positive(height=height);
        } else if (priority == "lock" && (lock == "openlock" || lock == "triplex")) {
            openlock_positive();
        } else if (priority == "lock" && lock == "infinitylock") {
            infinitylock_positive();
        } else if (priority == "lock" && lock == "dragonlock") {
            dragonlock_positive();
        } else if (priority == "lock" && lock == "dragonlocktriplex") {
            dragonlock_positive();
        } else {
            if (magnets == "magnetic") {
                magnetic_positive(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_positive(magnet_hole, height=height);
            }
        }
    } else {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) && magnets == "none") {
            openlock_topless_positive(height=height);
        } else if (priority == "lock" && lock == "triplex") {
            openlock_positive();
        } else if (priority == "lock" && lock == "openlock" && magnets == "none") {
            openlock_positive();
        } else if (priority == "lock" && lock == "infinitylock" && magnets == "none") {
            infinitylock_positive();
        } else if (priority == "lock" && lock == "dragonlocktriplex" && magnets == "none") {
            dragonlock_positive();
        } else {
            if (magnets == "magnetic") {
                magnetic_positive(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_positive(magnet_hole, height=height);
            }
        }
    }
}

module center_connector_negative(edge, priority, lock, magnets, magnet_hole, height=6, topless=TOPLESS) {
    if (edge == 1) {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true"))) {
            openlock_topless_negative(height=height);
        } else if (priority == "lock" && (lock == "openlock" || lock == "triplex")) {
            openlock_negative(SUPPORTS);
        } else if (priority == "lock" && lock == "infinitylock") {
            infinitylock_negative();
        } else if (priority == "lock" && lock == "dragonlock") {
            dragonlock_negative();
        } else if (priority == "lock" && lock == "dragonlocktriplex") {
            dragonlock_negative();
        } else {
            if (magnets == "magnetic") {
                magnetic_negative(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_negative(magnet_hole,height=height);
            }
        }
    } else {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) && magnets == "none") {
            openlock_topless_negative(height=height);
        } else if (priority == "lock" && lock == "triplex") {
            openlock_negative(SUPPORTS);
        } else if (priority == "lock" && lock == "openlock" && magnets == "none") {
            openlock_negative(SUPPORTS);
        } else if (priority == "lock" && lock == "infinitylock" && magnets == "none") {
            infinitylock_negative();
        } else if (priority == "lock" && lock == "dragonlock" && magnets == "none") {
            dragonlock_negative();
        } else if (priority == "lock" && lock == "dragonlocktriplex" && magnets == "none") {
            dragonlock_negative();
        } else {
            if (magnets == "magnetic") {
                magnetic_negative(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_negative(magnet_hole, height=height);
            }
        }
    }
}

module joint_connector_positive(edge, height=6, lock=LOCK, topless=TOPLESS) {
    if (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) {
        openlock_topless_positive(height=height);
    } else if(lock == "openlock" || lock == "triplex") {
        openlock_positive();
    } else if (lock == "infinitylock") {
        infinitylock_positive();
    } else if (lock == "dragonlock" || lock == "dragonlocktriplex") {
        dragonlock_positive();
    }
}

module joint_connector_negative(edge, height=6, lock=LOCK, topless=TOPLESS) {
    if (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) {
        openlock_topless_negative(height=height);
    } else if(lock == "openlock" || lock == "triplex") {
        openlock_negative(SUPPORTS);
    } else if (lock == "infinitylock") {
        infinitylock_negative();
    } else if (lock == "dragonlock" || lock == "dragonlocktriplex") {
        dragonlock_negative();
    }
}

module connector_positive(square_basis, priority, lock, magnets, magnet_hole, height=6, right=true, center=true, left=true) {
    if (left) {
        translate([0,square_basis*(.5),0]) center_connector_positive(0, priority, lock, magnets, magnet_hole, height=height);
    }
    if (center) {
        translate([0,square_basis*(-.5),0]) center_connector_positive(0, priority, lock, magnets, magnet_hole, height=height);
    }
    if(right) {
        translate([0,0,0]) joint_connector_positive(0, height=height);
    }
}

module connector_negative(square_basis, priority, lock, magnets, magnet_hole, height=6, right=true, center=true, left=true, magnets) {
    if (left) {
        translate([0,square_basis*(.5),0]) center_connector_negative(0, priority, lock, magnets, magnet_hole, height=height);
    }
    if (center) {
        translate([0,0,0]) joint_connector_negative(0, height=height);
    }
    if(right) {
        translate([0,square_basis*(-.5),0]) center_connector_negative(0, priority, lock, magnets, magnet_hole, height=height);
    }
}


module center_connector_wall_positive(edge, priority, lock, magnets, magnet_hole, height=6, topless=TOPLESS) {
    if (edge == 1) {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true"))) {
            openlock_topless_positive(height=height);
        } else if (priority == "lock" && (lock == "openlock" || lock == "triplex")) {
            openlock_wall_positive();
        } else if (priority == "lock" && lock == "infinitylock") {
            infinitylock_positive();
        } else if (priority == "lock" && lock == "dragonlock") {
            dragonlock_positive();
        } else if (priority == "lock" && lock == "dragonlocktriplex") {
            dragonlock_positive();
        } else {
            if (magnets == "magnetic") {
                magnetic_positive(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_positive(magnet_hole, height=height);
            }
        }
    } else {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) && magnets == "none") {
            openlock_topless_positive(height=height);
        } else if (priority == "lock" && lock == "triplex") {
            openlock_wall_positive();
        } else if (priority == "lock" && lock == "openlock" && magnets == "none") {
            openlock_positive();
        } else if (priority == "lock" && lock == "infinitylock" && magnets == "none") {
            infinitylock_positive();
        } else if (priority == "lock" && lock == "dragonlocktriplex" && magnets == "none") {
            dragonlock_positive();
        } else {
            if (magnets == "magnetic") {
                magnetic_positive(magnet_hole, height=height);
            } else if (magnets == "flex_magnetic") {
                flex_magnetic_positive(magnet_hole, height=height);
            }
        }
    }
}

module center_connector_wall_negative(edge, priority, lock, magnets, magnet_hole, height=6, topless=TOPLESS) {
    if (edge == 1) {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true"))) {
            echo("Not Implemented");
        } else if (priority == "lock" && (lock == "openlock" || lock == "triplex")) {
            openlock_wall_negative();
        } else if (priority == "lock" && lock == "infinitylock") {
            echo("Not Implemented");
        } else if (priority == "lock" && lock == "dragonlock") {
            echo("Not Implemented");
        } else if (priority == "lock" && lock == "dragonlocktriplex") {
            echo("Not Implemented");
        } else {
            if (magnets == "magnetic") {
                echo("Not Implemented");
            } else if (magnets == "flex_magnetic") {
                echo("Not Implemented");
            }
        }
    } else {
        if (priority == "lock" && (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) && magnets == "none") {
            echo("Not Implemented");
        } else if (priority == "lock" && lock == "triplex") {
            openlock_wall_negative();
        } else if (priority == "lock" && lock == "openlock" && magnets == "none") {
            openlock_wall_negative();
        } else if (priority == "lock" && lock == "infinitylock" && magnets == "none") {
            echo("Not Implemented");
        } else if (priority == "lock" && lock == "dragonlocktriplex" && magnets == "none") {
            echo("Not Implemented");
        } else {
            if (magnets == "magnetic") {
                echo("Not Implemented");
            } else if (magnets == "flex_magnetic") {
                echo("Not Implemented");
            }
        }
    }
}

module joint_connector_wall_positive(edge, height=6, lock=LOCK, topless=TOPLESS) {
    if (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) {
        echo("Not Implemented");
    } else if(lock == "openlock" || lock == "triplex") {
        openlock_wall_positive();
    } else if (lock == "infinitylock") {
        echo("Not Implemented");
    } else if (lock == "dragonlock" || lock == "dragonlocktriplex") {
        echo("Not Implemented");
    }
}

module joint_connector_wall_negative(edge, height=6, lock=LOCK, topless=TOPLESS) {
    if (lock == "openlock_topless" || (lock == "openlock" && topless == "true")) {
        echo("Not Implemented");
    } else if(lock == "openlock" || lock == "triplex") {
        openlock_wall_negative();
    } else if (lock == "infinitylock") {
        echo("Not Implemented");
    } else if (lock == "dragonlock" || lock == "dragonlocktriplex") {
        echo("Not Implemented");
    }
}

module connector_positive_strip(x, square_basis, edge_width, left=true, right=true, priority=PRIORITY, lock=LOCK, magnets=MAGNETS, magnet_hole=MAGNET_HOLE, height=HEIGHT) {
    for ( i = [0 : x-1] ) {
        if ((i == 0 && left == true) || (i == x-1 && right == true) || (i > 0 && i < x-1) || (x == 1)) {
            translate([square_basis*(i+1)-square_basis/2,0,0]) rotate([0,0,90]) center_connector_positive(x, priority, lock, magnets, magnet_hole, height=height);
        }
    }
    if (x > 1) {
        for ( i = [0 : ceil(x)-2] ) {
            translate([square_basis*(i+1),0,0]) rotate([0,0,90]) joint_connector_positive(x, height=height, lock=lock);
        }
    }
}

module connector_negative_strip(x, square_basis, edge_width, left=true, right=true, priority=PRIORITY, lock=LOCK, magnets=MAGNETS, magnet_hole=MAGNET_HOLE, height=HEIGHT) {
    for ( i = [0 : x-1] ) {
        if ((i == 0 && left == true) || (i == x-1 && right == true) || (i > 0 && i < x-1) || (x == 1)) {
            translate([square_basis*(i+1)-square_basis/2,0,0]) rotate([0,0,90]) center_connector_negative(x, priority, lock, magnets, magnet_hole, height=height);
        }
    }
    if (x > 1) {
        for ( i = [0 : ceil(x)-2] ) {
            translate([square_basis*(i+1),0,0]) rotate([0,0,90]) joint_connector_negative(x, height=height, lock=lock);
        }
    }
}
