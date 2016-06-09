/**
 * @author dforrer / https://github.com/dforrer
 * Developed as part of a project at University of Applied Sciences and Arts Northwestern Switzerland (www.fhnw.ch)
 */

/**
 * @param object THREE.Object3D
 * @param newRotation THREE.Euler
 * @param optionalOldRotation THREE.Euler
 * @constructor
 */

var SetRotationCommand = function ( object, newRotation, optionalOldRotation ) {

	Command.call( this );

	this.type = 'SetRotationCommand';
	this.name = 'Set Rotation';
	this.updatable = true;

	this.object = object;

	if ( object !== undefined && newRotation !== undefined ) {

		this.oldRotation = object.rotation.clone();
		this.newRotation = newRotation.clone();

	}

	if ( optionalOldRotation !== undefined ) {

		this.oldRotation = optionalOldRotation.clone();

	}

};

SetRotationCommand.prototype = {

	execute: function () {

		this.object.rotation.copy( this.newRotation );
		this.object.updateMatrixWorld( true );

	},

	undo: function () {

		this.object.rotation.copy( this.oldRotation );
		this.object.updateMatrixWorld( true );

	},

	update: function ( command ) {

		this.newRotation.copy( command.newRotation );

	},

};
